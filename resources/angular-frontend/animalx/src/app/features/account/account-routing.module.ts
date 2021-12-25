import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

const routes: Routes = [{
    path: '',
    component: AccountPageComponent
}, {
    path: 'orders',
    component: OrdersPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
