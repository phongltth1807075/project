import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private http: HttpClient,
    public  afAuth: AngularFireAuth
  ) {
  }

  singIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log(res);
      localStorage.setItem('isLogin',String(true))
      // this.router.navigate(['/home']);
      window.location.href='/home';
    }).catch(err => {
      alert(err);
    });
  }
}
