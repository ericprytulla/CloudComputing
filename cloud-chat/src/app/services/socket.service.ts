import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Router} from "@angular/router";
import {Message} from "../chat/chat.component";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;
  private connected: boolean;

  constructor( private router: Router) { }

  isConnected(){
    return this.connected;
  }

  login(username, password: string) {
    this.socket = io('localhost:3000',{ query: {username: username, password: password}});
    this.socket.connect();
    this.connected = true;
    this.router.navigate(["/chat"]);
  }

  register(username, password: string, image: string | ArrayBuffer, prefered_language: string) {
    this.socket = io('localhost:3000',{ query: {username: username, password: password}});
    this.socket.connect();
    this.connected = true;
    this.router.navigate(["/chat"]);
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
}
