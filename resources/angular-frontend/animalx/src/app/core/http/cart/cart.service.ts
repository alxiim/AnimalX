import { Injectable } from '@angular/core';
import { of } from 'rxjs';
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

    get cart$() {
        return of<CartItem[]>([{
            productId: 1,
            amount: 2
        },
        {
            productId: 1,
            amount: 2
        },
        {
            productId: 1,
            amount: 2
        }]);

        if (this._authService.isLoggedIn()) {
            // TODO get cart from database
        } else {
            // TODO Get cart from local storage
        }
    }

}
