import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { objectKeysToSnakeCase } from '../utils/utils';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        private _http: HttpClient
    ) { }

    /**
     * Get a CSRF cookie from the API server
     * @returns
     */
    initCSRF() {
        return this._http.get(environment.authUrl + '/sanctum/csrf-cookie');
    }

    /**
     * Get the user's auth status
     * @returns Whether the user is logged in
     */
    isLoggedIn() {
        return localStorage.getItem('animalx_logged_in') === 'true';
    }

    /**
     * Log a user in
     * @param credentials The user's email and password
     * @returns Auth server response
     */
    login(credentials: {email: string; password: string;}) {
        return this._http.post(
            environment.authUrl + '/login',
            credentials
        ).pipe(tap(() => {
            localStorage.setItem('animalx_logged_in', 'true');
        }));
    }

    /**
     * Sign a new user up
     * @param credentials The user's data
     * @returns Auth server response
     */
    signUp(credentials: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        passwordConfirmation: string;
    }) {
        return this._http.post(
            environment.authUrl + '/register',
            objectKeysToSnakeCase(credentials)
        ).pipe(tap(() => {
            localStorage.setItem('animalx_logged_in', 'true');
        }));
    }

    /**
     * Log a user out
     * @returns Auth server response
     */
    logout() {
        return this._http.post(
            environment.authUrl + '/logout',
            null
        ).pipe(tap(() => {
            localStorage.setItem('animalx_logged_in', 'false');
        }));
    }

}
