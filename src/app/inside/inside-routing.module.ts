import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HistoryComponent} from './history/history.component';
import {WalletComponent} from './wallet/wallet.component';
import {WithdrawComponent} from './withdraw/withdraw.component';
import {HistoryWithdrawComponent} from './history-withdraw/history-withdraw.component';
import {DealComponent} from './deal/deal.component';
import {PendingOrderComponent} from './pending-order/pending-order.component';
import {HistoryPendingOrderComponent} from './history-pending-order/history-pending-order.component';
import {TransactionComponent} from './transaction/transaction.component';
import {NgModule} from '@angular/core';
import {InsideComponent} from './inside.component';
import {WalletRechargeComponent} from './wallet-recharge/wallet-recharge.component';

const routes: Routes = [
  {
    path: '', component: InsideComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'wallet', component: WalletComponent},
      {path: 'withdraw', component: WithdrawComponent},
      {path: 'historyWithdraw', component: HistoryWithdrawComponent},
      {path: 'deal', component: DealComponent},
      {path: 'pending-order', component: PendingOrderComponent},
      {path: 'history-pending-order', component: HistoryPendingOrderComponent},
      {path: 'transaction', component: TransactionComponent},
      {path: 'wallet-recharge', component: WalletRechargeComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsideRoutingModule {
}
