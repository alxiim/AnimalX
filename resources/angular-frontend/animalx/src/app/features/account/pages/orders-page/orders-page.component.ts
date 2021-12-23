import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/http/orders/orders.service';

@Component({
    selector: 'app-orders-page',
    templateUrl: './orders-page.component.html',
    styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

    orders$ = this._orderService.query().pipe();

    constructor(
        private _orderService: OrdersService
    ) { }

    ngOnInit(): void {
    }

}
