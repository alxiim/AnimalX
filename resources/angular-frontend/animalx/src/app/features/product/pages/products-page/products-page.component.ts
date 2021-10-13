import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/http/product/product.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

    products$ = new Observable<Product[]>();

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this._route.queryParamMap.subscribe(params => {
            const categoryIds = params.getAll('categoryIds').map(id => parseInt(id));

            this.products$ = this._productService.query({
                "categoryIds[]": categoryIds
            });
        });
    }

}
