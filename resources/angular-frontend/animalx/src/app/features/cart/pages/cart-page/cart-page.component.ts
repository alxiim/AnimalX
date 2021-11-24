import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/http/cart/cart.service';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

    cart$ = this._cartService.cart$;
    // TODO make api call to get several products and switchMap

    constructor(
        private _cartService: CartService,
    ) { }

    ngOnInit(): void {
    }

}
