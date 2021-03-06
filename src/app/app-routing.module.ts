import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'mine',component: MineComponent },
  { path: 'browse',component: BrowseComponent },
  { path: 'buy',component: BuyComponent },
  { path: 'sell',component: SellComponent },
  { path: 'transactions/:id',component: TransactionComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
