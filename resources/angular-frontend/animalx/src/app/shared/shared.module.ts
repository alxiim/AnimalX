import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartItemCardComponent } from './cart-item-card/cart-item-card.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ProductCardComponent,
        CartItemCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ProductCardComponent,
        CartItemCardComponent
    ]
})
export class SharedModule { }
