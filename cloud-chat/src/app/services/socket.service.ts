import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Router} from "@angular/router";
import {Message} from "../chat/chat.component";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;
  private connected: boolean;
  private name: string = '';
  //private proxy_url: string = 'https://schnubbedibuhhhhh.eu-de.mybluemix.net';
  //private proxy_url: string = 'http://localhost:3000';
  private proxy_url: string = '';

  constructor( private router: Router, private http: HttpClient) { }

  isConnected(){
    return this.connected;
  }

  login(username, password: string) {
    this.socket = io(this.proxy_url,{ 
      query: {username: username, password: password}, transports: ['websocket'] });
    this.socket.connect();
    this.connected = true;
    this.name = username;
    this.router.navigate(["/chat"]);
    this._socket.on('disconnect', (reason) => {
      if (reason === 'io server disconnect') {
        this.name = '';
        this.connected = false;
        this.router.navigateByUrl('/');
      } else {
        this.socket = io(this.proxy_url,{
          query: {username: username, password: password}, transports: ['websocket'] });
      }
    });
  }

  register(username, password: string, image: string | ArrayBuffer, preferred_language: string) {
    this.http.post(this.proxy_url +'/user', {user: username, password: password, image: image, preferred_language: preferred_language}).subscribe((res: any) => {
      this.login(res.id, password);
    },
      (error1) => {
        console.log("User already exists!")
      });
  }

  sendMessage(message: Message){
    this.socket.emit('chat message', message);
  }

  createRoom(name: string){
    this.socket.emit('create group', name);
  }

  joinRoom(id: string){
    this.socket.emit('join group', id);
  }

  get _socket(){
    return this.socket;
  }

  get _name(){
    return this.name;
  }
}
