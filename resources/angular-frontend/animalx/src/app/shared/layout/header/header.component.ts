import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CategoryService } from 'src/app/core/http/category/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    links = [
        {
            path: '',
            label: 'Home'
        },
        {
            path: '/dieren',
            label: 'Dieren'
        }
    ]

    categories$ = this._categoryService.query();

    get isLoggedIn() {
        return this._authService.isLoggedIn();
    }

    constructor(
        private _categoryService: CategoryService,
        private _authService: AuthService
    ) { }

    ngOnInit(): void {
    }

}
