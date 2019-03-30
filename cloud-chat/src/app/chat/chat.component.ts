import { Component, OnInit } from '@angular/core';
import {SocketService} from "../services/socket.service";

export class Message{
  public sender: string;
  public message: string;
  public to: string;
  constructor(message: string, to: string, sender?: string){
    this.message = message;
    this.sender = sender;
    this.to = to;
  }
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private selected: string = 'all';
  private message: string;
  private alertMessage: string = "";
  private messages: Message[] = [];
  private chatrooms: any = [0, 1];


  constructor(private socketService: SocketService) {
    this.socketService._socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      this.messages.push(msg);
    });
    this.socketService._socket.on('user connected', (user) => {
      this.sendAlert('user ' + user + ' connected')
    });
  }

  ngOnInit() {
  }

  onClickSend(){
    var messageObj: Message = new Message(this.message, this.selected);
    this.socketService.sendMessage(messageObj);
    this.messages.push(messageObj);
    this.message = '';
  }

  private sendAlert(msg){
    setTimeout(() => this.alertMessage = null, 2000);
    this.alertMessage = msg;
  }

}
