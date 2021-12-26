import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../../models/cart.model';
import { ApiCreateOrder, ApiOrderResponse, Order } from '../../models/order.model';
import { objectKeysToSnakeCase } from '../../utils/utils';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    constructor(
        private _api: ApiService,
        private _http: HttpClient
    ) { }

    query(): Observable<Order[]> {
        return this._api.get<ApiOrderResponse[]>(
            '/orders'
        ).pipe(
            map(response => response.data.map(order => Order.adapt(order)))
        );
    }

    create(order: ApiCreateOrder): Observable<Order> {
        return this._api.post<ApiCreateOrder, ApiOrderResponse>(
            '/orders',
            {
                products: order.products.map(
                    product => objectKeysToSnakeCase(product) as CartItem
                )
            }
        ).pipe(
            map(response => Order.adapt(response.data))
        );
    }

}
