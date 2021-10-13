import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { ManageProductsPageComponent } from './pages/manage-products-page/manage-products-page.component';

const routes: Routes = [
    {
        path: 'products',
        component: ManageProductsPageComponent
    },
    {
        path: 'products/add',
        component: AddProductPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
