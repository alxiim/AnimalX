import { CartItem, CartItemWithProduct } from "./cart.model";

export interface ApiOrderResponse {
    id: number;
    created_at: string;
    products: any[];
}

export interface ApiCreateOrder {
    products: CartItem[];
}

export class Order {

    constructor(
        public id: number,
        public date: Date,
        public items: CartItemWithProduct[]
    ) {}

    static adapt(item: ApiOrderResponse): Order {
        return new Order(
            item.id,
            new Date(item.created_at),
            item.products.map(product => {
                return {
                    product: {...product},
                    amount: product.pivot.amount
                }
            })
        );
    }

}
