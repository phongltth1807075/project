import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email, this.password);
    this.service.singIn(this.email, this.password);
  }
}
