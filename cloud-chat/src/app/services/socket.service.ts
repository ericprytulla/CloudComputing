import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  isConnected(){
    console.log("socket.Service not implemented")
    return true;
  }
}
