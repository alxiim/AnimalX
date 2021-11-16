import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/http/cart/cart.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

    product: Product;

    constructor(
        private _route: ActivatedRoute,
        private _cartService: CartService
    ) {
        // TODO should this be in OnInit?
        this.product = this._route.snapshot.data.product;
    }

    ngOnInit(): void {
    }

    addToCart() {
        this._cartService.update(this.product.id, 1);
    }

}
