import { Component, OnInit } from '@angular/core';
import {SocketService} from "../services/socket.service";

export class Message{
  readonly sender: string;
  readonly message: string;
  readonly to: string;
  readonly timeStamp: Date;
  constructor(message: string, to: string, timeStamp: Date, sender?: string){
    this.message = message;
    this.sender = sender;
    this.to = to;
    this.timeStamp = timeStamp;
  }

  get timeStampString(): string{
    return this.timeStamp.toLocaleString();
  }
}

export class Chatroom{
  readonly name: string;
  readonly id: string;
  readonly type: string;
  public messages: Message[] = [];
  public users: User[] = [];
  public last_msg: Date;

  constructor(name, id, type: string){
    this.id = id;
    this.name = name;
    this.type = type;
  }

  pushMessage(message: Message){
    this.messages.push(message);
    this.last_msg = message.timeStamp;
  }

  pushUser(user: User){
    this.users.push(user);
  }
  popUser(user: User){
    this.users.splice(this.users.findIndex((u: User)=>{return user.equals(u)}), 1);
  }
}

export class User {
  public name: string;
  readonly id: string;

  constructor(name, id: string){
    this.name = name;
    this.id = id;
  }

  equals(user: User){
    return user.id == this.id;
  }
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public selected: string = 'global';
  private message: string;
  private alertMessage: string = "";
  private positive: boolean;
  private messages: Message[] = [];
  private chatrooms: any = {'global': new Chatroom('global', '0','group' )};



  constructor(private socketService: SocketService) {
    this.socketService._socket.on('connected users', (users) => {
      users.map((user) => {this.chatrooms.global.pushUser(user); console.log(user)});
    });
    this.socketService._socket.on('chat message', (msg) => {
      console.log(msg);
      this.chatrooms[msg.to].pushMessage(new Message(msg.message, msg.to, new Date(msg.timeStamp), msg.sender));
    });
    this.socketService._socket.on('user connected', (user, id) => {
      this.chatrooms.global.pushUser(new User(user, id));
      this.sendAlert('user ' + user + ' connected', true);
    });
    this.socketService._socket.on('user disconnected', (user, id) => {
      this.chatrooms.global.popUser(new User(user, id));
      this.sendAlert('user ' + user + ' disconnected', false)
    });
  }

  ngOnInit() {
  }

  onClickSend(){
    var messageObj: Message = new Message(this.message, this.selected, new Date());
    this.socketService.sendMessage(messageObj);
    this.chatrooms[this.selected].messages.push(messageObj);
    this.message = '';
  }

  onClickCreateGroup(){

  }

  private sendAlert(msg: string, positive: boolean){
    this.positive = positive;
    this.alertMessage = msg;
    setTimeout(() => {
      this.alertMessage = null;
    }, 2000);
  }

}
