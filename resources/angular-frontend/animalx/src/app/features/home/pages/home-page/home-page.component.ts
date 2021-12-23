import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CategoryService } from 'src/app/core/http/category/category.service';
import { ProductService } from 'src/app/core/http/product/product.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    popularProducts$ = this._productService.query();

    categories$ = this._categoryService.query().pipe(
        map(categories => {
            return categories.map(category => {
                return {
                    ...category,
                    imageUrl$: this._productService.query({
                            "categoryIds[]": [category.id]
                        }).pipe(map(products => products[0].images[0]))
                }
            })
        })
    );

    constructor(
        private _productService: ProductService,
        private _categoryService: CategoryService
    ) { }

    ngOnInit(): void {
    }

}
