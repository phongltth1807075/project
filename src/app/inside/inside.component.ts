import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css']
})
export class InsideComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    // const isLogin = localStorage.getItem('isLogin');
    // if (isLogin) {
    //   this.router.navigate(['/home']);
    // } else {
    //   this.router.navigate(['/authentication/login']);
    // }
  }
}
