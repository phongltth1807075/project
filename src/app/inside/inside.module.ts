import { NgModule } from '@angular/core';
import {InsideRoutingModule} from './inside-routing.module';
import {InsideComponent} from './inside.component';
import {FormsModule} from '@angular/forms';
import {DealComponent} from './deal/deal.component';
import {HistoryComponent} from './history/history.component';
import {HistoryPendingOrderComponent} from './history-pending-order/history-pending-order.component';
import {HomeComponent} from './home/home.component';
import {PendingOrderComponent} from './pending-order/pending-order.component';
import {TransactionComponent} from './transaction/transaction.component';
import {WalletComponent} from './wallet/wallet.component';
import {WithdrawComponent} from './withdraw/withdraw.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WalletRechargeComponent } from './wallet-recharge/wallet-recharge.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    InsideComponent,
    DealComponent,
    HistoryComponent,
    HistoryPendingOrderComponent,
    HomeComponent,
    PendingOrderComponent,
    TransactionComponent,
    WalletComponent,
    WithdrawComponent,
    NavbarComponent,
    WalletRechargeComponent
  ],
  imports: [
    InsideRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [InsideComponent]
})
export class InsideModule { }
