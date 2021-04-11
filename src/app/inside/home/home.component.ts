import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private static elementRef: ElementRef;

  constructor() {}

  ngOnInit(): void {
    HomeComponent.loadScript('assets/js/vendor/jquery.circlechart.js');
    HomeComponent.loadScript('assets/js/vendor/jquery.min.js');
    HomeComponent.loadScript('assets/js/vendor/jquery.validate.min.js');
    HomeComponent.loadScript('assets/js/bootstrap.js');
    HomeComponent.loadScript('assets/js/Chart.bundle.min.js');
    HomeComponent.loadScript('assets/js/main.js');
    HomeComponent.loadScript('assets/js/popper.min.js');
    HomeComponent.loadScript('assets/js/swiper-bundle.min.js');
  }

  private static loadScript(scriptUrl: string) {
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptUrl;
    scriptElement.type = 'text/javascript';
    HomeComponent.elementRef.nativeElement.appendChild(scriptElement);
  }
}
