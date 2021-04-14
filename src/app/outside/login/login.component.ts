import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(private service: LoginService, private toastrService: ToastService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.service.singIn(this.email, this.password).then(res => {
      localStorage.setItem('isLogin', String(true));
      this.router.navigate(['/home']).then(() => {
        this.toastrService.success('Success', 'Đăng nhập thành công !');
      });
      // window.location.href='/home';
    }).catch(err => {
      this.toastrService.error('Tài khoản hoặc mật khẩu chưa chính xác !', 'Error');
    });
  };
}
