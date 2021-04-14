import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private afs: AngularFirestore) {
    const clearGetUid = setInterval(() => {
      if (localStorage.getItem('uId') !== undefined && localStorage.getItem('uId') !== null) {
        const uid = localStorage.getItem('uId');
        console.log(uid);
        this.getData(uid);
        clearInterval(clearGetUid);
      }
    }, 50);
  }

  ngOnInit(): void {

  }

  getData(uid: string | null) {
    this.afs.doc('users/' + uid).valueChanges().subscribe(data => {
      //run
      console.log(data);
    });
  }

  async ngAfterViewInit(): Promise<void> {
    await this.loadScript('/assets/js/vendor/jquery.min.js');
    await this.loadScript('/assets/js/vendor/jquery.validate.min.js');
    await this.loadScript('/assets/js/vendor/jquery.circlechart.js');
    await this.loadScript('/assets/js/common.js');
  }

  loadScript(scriptUrl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}
