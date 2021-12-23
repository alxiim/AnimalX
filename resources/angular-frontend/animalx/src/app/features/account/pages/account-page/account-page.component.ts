import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'app-account-page',
    templateUrl: './account-page.component.html',
    styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

    constructor(
        private _authService: AuthService
    ) { }

    ngOnInit(): void {
    }

    logout() {
        this._authService.logout().subscribe();
    }

}
