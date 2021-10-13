import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { Category, ApiCategoryResponse, ApiCreateCategory, ApiUpdateCategory } from '../../models/category.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(
        private _api: ApiService
    ) { }

    query(): Observable<Category[]> {
        return this._api.get<ApiCategoryResponse[]>('/categories')
            .pipe(
                map(response => response.data.map(category => Category.adapt(category)))
            )
    }

    get(id: number): Observable<Category> {
        return this._api.get<ApiCategoryResponse>('/categories/' + id.toString())
            .pipe(
                map(response => Category.adapt(response.data))
            )
    }

    create(category: ApiCreateCategory): Observable<Category> {
        return this._api.post<ApiCreateCategory, ApiCategoryResponse>('/categories', category)
            .pipe(
                map(response => Category.adapt(response.data))
            )
    }

    update(id: number, category: ApiUpdateCategory): Observable<Category> {
        return this._api.patch<ApiUpdateCategory, ApiCategoryResponse>('/categories/' + id.toString(), category)
            .pipe(
                map(response => Category.adapt(response.data))
            )
    }

    delete(id: number) {
        return this._api.delete('/categories/' + id.toString());
    }
}
