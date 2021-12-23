import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        AccountPageComponent,
        OrdersPageComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        SharedModule
    ]
})
export class AccountModule { }
