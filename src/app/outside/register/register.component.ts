import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: any;
  password: any;
  repassword: any;
  private authentication = 'https://us-central1-afgpaper-4e165.cloudfunctions.net/createUser';


  constructor(private service: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async SingUp() {
    if (this.password === this.repassword) {
      try {
        const response = await axios.get(this.authentication + '?email=' + this.email + '&password=' + this.password);
        if (response.data === 'success') {
          await this.router.navigate(['/authentication/login']);
        }
      }catch (e) {
        alert('Email đã tồn tại !!!');
      }
    } else {
      alert('Mật khẩu nhập lại không chính xác !!!');
    }
  }

}
