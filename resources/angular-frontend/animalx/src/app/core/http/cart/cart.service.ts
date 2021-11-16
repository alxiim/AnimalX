import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { CartItem } from '../../models/cart.model';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(
        private _api: ApiService,
        private _authService: AuthService
    ) { }

    cart$ = new BehaviorSubject<CartItem[]>(this.cart);

    get cart() {
        const cart = localStorage.getItem('animalx_cart');
        return cart ? JSON.parse(cart) as CartItem[] : [];
    }

    set cart(cart: CartItem[]) {
        localStorage.setItem('animalx_cart', JSON.stringify(cart));
        this.cart$.next(cart);
    }

    /**
     * Add or remove a product to the user's cart
     * @param productId The product id
     * @param amount The amount of products to add/remove
     */
    update(productId: number, amount: number) {
        // Get the current cart
        let cart = this.cart;

        // Find the product in the cart
        const index = cart.findIndex(cartItem => cartItem.productId === productId);

        // If the product is found in the cart
        // change the amount
        if (index !== -1) {
            // Calculate the new amount
            const newAmount = cart[index].amount + amount;

            // If the new amount is smaller than 1
            // Remove the entire product from the cart
            // Otherwise, change the amount
            if (newAmount < 1) {
                cart = cart.splice(index, 1);
            } else {
                cart[index].amount = newAmount;
            }
        }

        // If the product is not yet on the cart
        // And more than 0 are added
        // add it as a new cart item
        else if (amount > 0) {
            const cartItem = {
                productId: productId,
                amount: amount
            };
            cart.push(cartItem);
        }

        // Save the changes to the cart
        this.cart = cart;
    }

}
