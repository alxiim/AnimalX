import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { Product, ApiProductResponse, ApiCreateProduct, ApiUpdateProduct, ApiProductQueryConfig } from '../../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/api-response.model';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(
        private _api: ApiService,
        private _http: HttpClient
    ) { }

    query(config?: ApiProductQueryConfig): Observable<Product[]> {
        return this._api.get<ApiProductResponse[]>(
            '/products',
            config
        ).pipe(
            map(response => response.data.map(product => Product.adapt(product)))
        )
    }

    get(id: number): Observable<Product> {
        return this._api.get<ApiProductResponse>('/products/' + id.toString())
            .pipe(
                map(response => Product.adapt(response.data))
            )
    }

    create(product: ApiCreateProduct): Observable<Product> {
        return this._api.post<ApiCreateProduct, ApiProductResponse>(
            environment.apiUrl + '/products',
            product
        ).pipe(
            map(response => Product.adapt(response.data))
        );
    }

    update(id: number, product: ApiUpdateProduct): Observable<Product> {
        return this._api.patch<ApiUpdateProduct, ApiProductResponse>('/products/' + id.toString(), product)
            .pipe(
                map(response => Product.adapt(response.data))
            )
    }

    delete(id: number) {
        return this._api.delete('/products/' + id.toString());
    }
}
