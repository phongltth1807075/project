import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    fireAuth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        localStorage.setItem('uId', uid);
        this.router.navigate(['/home']);
        console.log(user);
      } else {
        this.router.navigate(['/authentication/login']);
      }
    });
  }

  ngOnInit(): void {
  }
}
