import { Product } from "./product.model";

export interface CartItem {
    productId: number;
    amount: number;
}

export interface CartItemWithProduct {
    amount: number;
    product: Product;
}
