import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CartService } from 'src/app/core/http/cart/cart.service';
import { CategoryService } from 'src/app/core/http/category/category.service';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    categories$ = this._categoryService.query();

    showCartAnimation = false;

    get isLoggedIn() {
        return this._authService.isLoggedIn();
    }

    constructor(
        private _categoryService: CategoryService,
        private _authService: AuthService,
        private _cartService: CartService
    ) { }

    ngOnInit(): void {
        // Display animation when cart changed
        this._cartService.cart$.pipe(
            // Prevent animation on start up
            filter(cart => cart.length > 0)
        ).subscribe(() => {
            this.showCartAnimation = true;
            // TODO use a nice rxjs transformation
            setTimeout(() => {
                this.showCartAnimation = false;
            }, 500);
        })
    }

}
