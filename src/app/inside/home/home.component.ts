import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  async ngAfterViewInit() {
    await this.loadScript('../../../assets/js/vendor/jquery.circlechart.js');
    await this.loadScript('../../../assets/js/vendor/jquery.min.js');
    await this.loadScript('../../../assets/js/vendor/jquery.validate.min.js');
    await this.loadScript('../../../assets/js/bootstrap.js');
    await this.loadScript('../../../assets/js/Chart.bundle.min.js');
    await this.loadScript('../../../assets/js/main.js');
    await this.loadScript('../../../assets/js/popper.min.js');
    await this.loadScript('../../../assets/js/swiper-bundle.min.js');
    await this.loadScript('../../../assets/css/style.css');
    await this.loadScript('../../../assets/css/bootstrap.css');
    await this.loadScript('../../../assets/css/swiper-bundle.min.css');
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}
