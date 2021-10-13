import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    form = this._fb.group({
        email: [''],
        password: ['']
    });

    constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private _router: Router
    ) { }

    ngOnInit(): void {
    }

    login() {
        if (!this.form.valid) {
            // TODO show error
            return;
        }

        this._authService.login(this.form.value)
            .subscribe(() => {
                this._router.navigateByUrl('/account');
            });
    }

}
