import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin/admin.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth/no-auth.guard';

const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'cart',
        loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
    },
    {
        path: 'account',
        loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
        canLoad: [AdminGuard],
        canActivate: [AuthGuard, AdminGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
        canActivate: [NoAuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
