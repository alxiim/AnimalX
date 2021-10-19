import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/http/product/product.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.scss']
})
export class CartItemCardComponent implements OnInit {

    @Input()
    amount?: number;

    @Input()
    productId?: number;

    product?: Product;

    constructor(
        private _productService: ProductService
    ) {}

    ngOnInit(): void {
        // TODO throw error is productId not given
        this._productService.get(this.productId!)
            .subscribe(product => this.product = product);
    }

}
