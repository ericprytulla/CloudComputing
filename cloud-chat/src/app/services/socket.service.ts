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

  login(username: string) {
    this.connect(username)
    this.router.navigate(["/chat"]);
  }

  sendMessage(message: Message){
    this.socket.emit('chat message', message);
    return false;
  }

  get _socket(){
    return this.socket;
  }

  private connect(username: string) {
    this.socket = io('localhost:3000' , {query: {username: username}});
    this.socket.connect();
    this.connected = true;
  }
}