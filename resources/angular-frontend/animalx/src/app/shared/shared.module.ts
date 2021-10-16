import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Layout
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

// Components
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartItemCardComponent } from './components/cart-item-card/cart-item-card.component';

// Pipes
import { OrderByPipe } from './pipes/order-by/order-by.pipe';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ProductCardComponent,
        CartItemCardComponent,
        OrderByPipe
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ProductCardComponent,
        CartItemCardComponent,
        OrderByPipe
    ]
})
export class SharedModule { }
