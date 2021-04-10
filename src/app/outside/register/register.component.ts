import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: any;
  password: any;
  repassword: any;


  constructor(private service: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  SingUp() {
    if (this.password === this.repassword) {
      this.service.singUp(this.email, this.password);
    } else {
      alert('Mật khẩu nhập lại không chính xác !!!');
    }
  }

}
