export interface ApiProductResponse {
    id: number;
    name: string;
    category_id: number;
    description: string;
    price: number;
    country: string;
    color: string;
}

export interface ApiCreateProduct {
    name: string;
    categoryId: number;
    description: string;
    price: number;
    country: string;
    color: string;
}

export interface ApiUpdateProduct {
    name: string;
    categoryId: number;
    description: string;
    price: number;
    country: string;
    color: string;
}

export interface ApiProductQueryConfig {
    "categoryIds[]": number[];
}

export class Product {

    constructor(
        public id: number,
        public name: string,
        public categoryId: number,
        public description: string,
        public price: number,
        public country: string,
        public color: string
    ) {}

    static adapt(item: ApiProductResponse): Product {
        return new Product(
            item.id,
            item.name,
            item.category_id,
            item.description,
            item.price,
            item.country,
            item.color
        );
    }

}
