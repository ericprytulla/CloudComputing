import { Component, OnInit } from '@angular/core';
import {SocketService} from "../services/socket.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = null;
  required: boolean = false;

  constructor(private socketService: SocketService) {

  }

  ngOnInit() {
  }

  onClickLogin(){
    if (this.username && this.username.length > 1 && this.username.length < 10){
      this.socketService.login(this.username);
    } else {
      this.required = true;
    }
  }
}
