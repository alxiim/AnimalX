import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'app-account-page',
    templateUrl: './account-page.component.html',
    styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

    constructor(
        private _authService: AuthService,
        private _router: Router
    ) { }

    ngOnInit(): void {
    }

    logout() {
        this._authService.logout().subscribe(() => {
            this._router.navigateByUrl('/auth/login');
        });
    }

}
