import { Component, OnInit } from '@angular/core';
import {SocketService} from "../services/socket.service";

export class Message{
  readonly sender: string;
  public message: string;
  public media: string | ArrayBuffer;
  readonly to: string;
  readonly timeStamp: Date;
  readonly type: string;
  constructor(message: string, media: string | ArrayBuffer, to: string, timeStamp: Date, type: string, sender?: string){
    this.message = message;
    this.sender = sender;
    this.to = to;
    this.timeStamp = timeStamp;
    this.type = type;
    this.media = media;
  }

  get timeStampString(): string{
    return this.timeStamp.toLocaleString();
  }
}

export class Chatroom{
  readonly name: string;
  readonly id: string;
  readonly type: string;
  public isMember: boolean;
  public messages: Message[] = [];
  public users: User[] = [];
  public last_msg: Date;

  constructor(name, id, type: string, isMember: boolean){
    this.id = id;
    this.name = name;
    this.type = type;
    this.isMember = isMember;
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
  findUserById(id: string){
    let index = this.users.findIndex((u: User) => {return u.id == id});
    return this.users[index];
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
  public file: string | ArrayBuffer;
  private message: string;
  private alertMessage: string = "";
  private positive: boolean;
  public typeFile: boolean = false;
  private chatrooms: any = {'global': new Chatroom('global', 'global','group', true )};

  constructor(private socketService: SocketService) {
    this.socketService._socket.on('connected users', (users) => {
      users.map((user) => {this.chatrooms.global.pushUser(user)});
    });
    this.socketService._socket.on('existing groups', (groups) => {
      groups.map((group) => {
        this.chatrooms[group.id] = new Chatroom(group.id, group.id, 'group', false);
        group.users.map( user => this.chatrooms[group.id].pushUser(this.chatrooms['global'].findUserById(user)));
      });
    });
    this.socketService._socket.on('group message', (msg) => {
      this.chatrooms[msg.to].pushMessage(new Message(msg.message, msg.media, msg.to, new Date(msg.timeStamp), msg.type, msg.sender));
      console.log(msg.media);
    });
    this.socketService._socket.on('personal message', (msg) => {
      let message = new Message(msg.message, msg.file, msg.to, new Date(msg.timeStamp), msg.type ,msg.sender)
      if (!this.chatrooms[msg.sender]){
        this.chatrooms[msg.sender] = new Chatroom(this.chatrooms['global'].findUserById(msg.sender).name, msg.sender, 'personal', true);
        this.chatrooms[msg.sender].pushUser(this.chatrooms['global'].findUserById(msg.sender));
      }
      this.chatrooms[msg.sender].pushMessage(message);
    });
    this.socketService._socket.on('user connected', (user, id) => {
      this.chatrooms.global.pushUser(new User(user, id));
      this.sendAlert('user ' + user + ' connected', true);
    });
    this.socketService._socket.on('group created', (name, userId) => {
      this.chatrooms[name] = new Chatroom(name, name, 'group', false);
      this.chatrooms[name].pushUser(this.chatrooms['global'].findUserById(userId));
    });
    this.socketService._socket.on('user joined', (name, userId) => {
      this.chatrooms[name].pushUser(this.chatrooms['global'].findUserById(userId));
    });
    this.socketService._socket.on('user disconnected', (user, id) => {
      this.chatrooms.global.popUser(new User(user, id));
      this.sendAlert('user ' + user + ' disconnected', false)
    });
  }

  ngOnInit() {
  }

  onClickSend(){
    var messageObj: Message = new Message(this.message, this.file, this.selected, new Date(), this.chatrooms[this.selected].type);
    this.socketService.sendMessage(messageObj);
    this.chatrooms[this.selected].messages.push(messageObj);
    this.message = '';
    this.file == null;
    console.log(this.file);
  }

  onClickCreateGroup(){
    var name = prompt('Please enter the chatroom name','Blob');
    if (name != null && name != "" && this.chatrooms[name]) {
      alert("Chatroom " + name + " existiert bereits!");
    }
    this.chatrooms[name] = new Chatroom(name, name, 'group', true);
    this.selected = name;
    this.socketService.createRoom(name);
  }

  onClickJoinGroup() {
    this.chatrooms[this.selected].isMember = true;
    this.socketService.joinRoom(this.selected);
  }

  onClickPrivateMessage(to: User){
    this.chatrooms[to.id] = new Chatroom(to.name, to.id, 'personal', true);
    this.selected = to.id;
    this.chatrooms[to.id].pushUser(to);
  }

  onFileSelect(event){
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.file = reader.result;
    }, false);
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  private sendAlert(msg: string, positive: boolean){
    this.positive = positive;
    this.alertMessage = msg;
    setTimeout(() => {
      this.alertMessage = null;
    }, 2000);
  }
  switchMode(event){
    event.preventDefault();
    this.typeFile = !this.typeFile;
  }
}
