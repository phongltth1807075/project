import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authentication = 'https://us-central1-afgpaper-4e165.cloudfunctions.net/createUser';

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  singIn(email: string, password: string) {
    return new Promise<any>((resolve, rejects) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
        console.log(res);
        this.router.navigate(['/home']);
      }, error => rejects(error));
    });
  }

  singUp(email: string, password: string) {
    return this.http.get(this.authentication + '?email=' + email + '&password=' + password).subscribe((data:any)=>{
      console.log(data);
    });
  }
}
