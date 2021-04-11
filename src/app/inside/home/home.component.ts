import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
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
