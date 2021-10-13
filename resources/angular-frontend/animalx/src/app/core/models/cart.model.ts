import { Observable } from "rxjs";
import { Product } from "./product.model";

export interface CartItem {
    productId: number;
    amount: number;
    product?: Product;
}
