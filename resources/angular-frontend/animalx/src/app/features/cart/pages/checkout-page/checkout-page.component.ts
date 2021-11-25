import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/core/http/cart/cart.service';
import { ProductService } from 'src/app/core/http/product/product.service';
import { CartItemWithProduct } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

    cart$ = this._cartService.cart$.pipe(
        switchMap(cartItems => {
            // Get product ids
            const productIds = cartItems.map(cartItem => cartItem.productId);

            // Get information from products in cart
            // Return cart items with products
            return this._productService.query({
                "productIds[]": productIds
            }).pipe(
                map(products => {
                    return cartItems.map(cartItem => {
                        return {
                            product: products.find(product => product.id == cartItem.productId),
                            amount: cartItem.amount
                        }
                    }).filter(item => item.product !== undefined) as CartItemWithProduct[];
                })
            );
        }
    ));

    total = 0;

    contactForm = this._fb.group({
        'firstName': null,
        'lastName': null,
        'street': null,
        'postalCode': null,
        'city': null
    });

    constructor(
        private _cartService: CartService,
        private _productService: ProductService,
        private _fb: FormBuilder
    ) { }

    ngOnInit(): void {
        // Calculate cart total when cart changes
        this.cart$.subscribe(cart => {
            let price = 0;
            cart.forEach(item => {price += item.amount * item.product.price })
            this.total = price;
        });
    }

}
