import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CategoryService } from 'src/app/core/http/category/category.service';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
