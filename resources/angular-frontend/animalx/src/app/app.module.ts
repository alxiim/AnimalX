import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './core/auth/auth.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


export function initCSRF(authService: AuthService) {
    return () => authService.initCSRF();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule
    ],
    providers: [
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: initCSRF,
        //     deps: [AuthService],
        //     multi: true
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
