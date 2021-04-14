import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastService} from 'ng-uikit-pro-standard';


@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  action = 'Mua';
  percentage = 0.00001
  priceUSDT = 0.05397;
  quantityUSDT = 0.2;
  type = 1;
  price: string | undefined;
  quantity: string | undefined;
  uId: string | null | undefined;
  arrayDealSell = [
    {
      priceUSDT : 0.05397,
      quantityUSDT : 0.2
    },{
      priceUSDT : 0.05398,
      quantityUSDT : 0.5
    },{
      priceUSDT : 0.05399,
      quantityUSDT : 0.2
    },{
      priceUSDT : 0.05395,
      quantityUSDT : 0.3
    },{
      priceUSDT : 0.05392,
      quantityUSDT : 0.2
    },{
      priceUSDT : 0.05391,
      quantityUSDT : 0.7
    },{
      priceUSDT : 0.05396,
      quantityUSDT : 0.9
    },
  ];

  arrayDealBuy = [
    {
      priceUSDT : 0.05397,
      quantityUSDT : 0.2
    },{
      priceUSDT : 0.05398,
      quantityUSDT : 0.5
    },{
      priceUSDT : 0.05399,
      quantityUSDT : 0.2
    },{
      priceUSDT : 0.05395,
      quantityUSDT : 0.3
    },{
      priceUSDT : 0.05392,
      quantityUSDT : 0.2
    },{
      priceUSDT : 0.05391,
      quantityUSDT : 0.7
    },{
      priceUSDT : 0.05396,
      quantityUSDT : 0.9
    },
  ]

  constructor(private angularFirestore: AngularFirestore, private toastService: ToastService,) {
  }

  ngOnInit(): void {
    this.uId = localStorage.getItem('uId');
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

  choseAction($event: any, value: string) {
    this.action = value;
  }

 async submitAction() {
    const data = {
      uid: this.uId,
      amount: this.quantity,
      symbolBalance: '',
      typeJoint: this.action,
      type: this.type,
      price: this.price
    };
    try {
      const response = await this.angularFirestore.collection('orders').add(data);
      console.log(response);
      this.toastService.success("Success","Đặt lệnh thành công !!!")
    }catch (e){
      this.toastService.error("Error","Lệnh của bạn đang gặp vấn đề vui lòng kiểm tra lại !!!")
    }

  }

  updateDataWithStep() {
    console.log(1);
  }
}
