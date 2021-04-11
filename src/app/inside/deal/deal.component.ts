import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  constructor() { }

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
