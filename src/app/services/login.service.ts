import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public  afAuth: AngularFireAuth,
  ) {
  }

  singIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
}
