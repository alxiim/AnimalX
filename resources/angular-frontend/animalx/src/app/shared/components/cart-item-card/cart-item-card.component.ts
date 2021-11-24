import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/http/cart/cart.service';
import { CategoryService } from 'src/app/core/http/category/category.service';
import { ProductService } from 'src/app/core/http/product/product.service';
import { CartItem } from 'src/app/core/models/cart.model';
import { Category } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.scss']
})
export class CartItemCardComponent implements OnInit {

    @Input()
    item?: {
        product: Product;
        amount: number;
    };

    category?: Category;

    constructor(
        private _categoryService: CategoryService,
        private _cartService: CartService
    ) {}

    ngOnInit(): void {
        // TODO throw error if product is undefined
        this._categoryService.get(this.item!.product.categoryId)
                    .subscribe(category => this.category = category);
    }

    updateCart(amount: number) {
        // TODO throw error is productId not given
        this._cartService.update(this.item!.product.id, amount);
    }

}
