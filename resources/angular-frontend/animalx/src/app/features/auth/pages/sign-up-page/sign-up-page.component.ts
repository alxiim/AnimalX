import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

    form = this._fb.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        password: [''],
        passwordConfirmation: ['']
    });

    constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private _router: Router
    ) { }

    ngOnInit(): void {
    }

    signUp() {
        if (!this.form.valid) {
            // TODO show error
            return;
        }

        this._authService.signUp(this.form.value)
        .subscribe(() => {
            this._router.navigateByUrl('/account');
        });
    }

}
