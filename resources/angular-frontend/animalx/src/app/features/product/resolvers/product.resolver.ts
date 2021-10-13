import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/core/http/product/product.service';
import { Product } from 'src/app/core/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

    constructor(
        private _productService: ProductService,
        private _router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        // Get the product id from the url
        const id = parseInt(route.paramMap.get('id')!);

        // Get the product
        return this._productService.get(id)
            .pipe(catchError(error => {
                // TODO show not found page
                this._router.navigateByUrl('/');
                return EMPTY;
            }));
    }
}
