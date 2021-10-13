import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/core/http/cart/cart.service';
import { ProductService } from 'src/app/core/http/product/product.service';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

    cart$ = this._cartService.cart$.pipe(switchMap(cart => {
        return of(
            cart.map(item => {
                return {
                    ...item,
                    // product: this._productService.get(item.productId)
                }
            })
        );
    }));

    constructor(
        private _cartService: CartService,
        private _productService: ProductService
    ) { }

    ngOnInit(): void {
        this._cartService.cart$
            .subscribe(cart => {
                cart.map
            })
    }

}
