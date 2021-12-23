import { CartItem } from "./cart.model";

export interface ApiOrderResponse {
    id: number;
    date: string;
    items: CartItem[];
}

export interface ApiCreateOrder {
    products: CartItem[];
}

export class Order {

    constructor(
        public id: number,
        public date: Date,
        public items: CartItem[]
    ) {}

    static adapt(item: ApiOrderResponse): Order {
        return new Order(
            item.id,
            new Date(item.date),
            item.items
        );
    }

}
