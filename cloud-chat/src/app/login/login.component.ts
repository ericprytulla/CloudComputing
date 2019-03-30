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
    if (this.username){
      this.socketService.login(this.username);
    } else {
      this.required = true;
    }
  }
}
