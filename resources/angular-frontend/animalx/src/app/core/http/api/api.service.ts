import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../../models/api-response.model';
import { objectKeysToSnakeCase } from '../../utils/utils';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private _http: HttpClient
    ) { }

    /**
     * Perform a get request to the api.
     * @param endpoint
     * @param params
     * @returns An observable of the api response.
     */
    get<R>(
        endpoint: string,
        params?: {[param: string]: any}
    ): Observable<ApiResponse<R>> {
        return this._http.get<ApiResponse<R>>(
            environment.apiUrl + endpoint,
            { params: objectKeysToSnakeCase(params) }
        );
    }

    /**
     * Perform a post request to the api.
     * @param endpoint
     * @param body
     * @returns An observable of the api response.
     */
    post<B, R>(
        endpoint: string,
        body: B
    ): Observable<ApiResponse<R>> {
        return this._http.post<ApiResponse<R>>(
            environment.apiUrl + endpoint,
            objectKeysToSnakeCase(body)
        );
    }

    /**
     * Perform a patch request to the api.
     * @param endpoint
     * @param body
     * @returns An observable of the api response.
     */
    patch<B, R>(
        endpoint: string,
        body: B
    ): Observable<ApiResponse<R>> {
        return this._http.patch<ApiResponse<R>>(
            environment.apiUrl + endpoint,
            objectKeysToSnakeCase(body)
        );
    }

    /**
     * Perform a put request to the api.
     * @param endpoint
     * @param body
     * @returns An observable of the api response.
     */
    put<B, R>(
        endpoint: string,
        body: B
    ): Observable<ApiResponse<R>> {
        return this._http.put<ApiResponse<R>>(
            environment.apiUrl + endpoint,
            objectKeysToSnakeCase(body)
        );
    }

    /**
     * Perform a delete request to the api.
     * @param endpoint
     * @returns An observable of the api response.
     */
    delete<R>(
        endpoint: string
    ): Observable<ApiResponse<R>> {
        return this._http.delete<ApiResponse<R>>(
            environment.apiUrl + endpoint
        );
    }
}
