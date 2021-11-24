import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/http/cart/cart.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    @Input()
    product?: Product;

    constructor(
        private _cartService: CartService
    ) { }

    ngOnInit(): void {
    }

    getCoverImage(product: Product) {
        return product.images[0] ? 'storage/'+product.images[0] : 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
    }

    addToCart() {
        if (this.product) {
            this._cartService.update(this.product.id, 1);
        }
    }

}
