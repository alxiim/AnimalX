export interface ApiProductResponse {
    id: number;
    name: string;
    category_id: number;
    description: string;
    price: number;
    country: string;
    color: string;
    images: ProductImage[]
}

export interface ProductImage {
    filename: string;
}

// export interface ApiCreateProduct {
//     name: string;
//     categoryId: number;
//     description: string;
//     price: number;
//     country: string;
//     color: string;
//     image?: File;
// }

export type ApiCreateProduct = FormData;

export interface ApiUpdateProduct {
    name: string;
    categoryId: number;
    description: string;
    price: number;
    country: string;
    color: string;
}

export interface ApiProductQueryConfig {
    "categoryIds[]"?: number[];
    "productIds[]"?: number[];
}

export class Product {

    constructor(
        public id: number,
        public name: string,
        public categoryId: number,
        public description: string,
        public price: number,
        public country: string,
        public color: string,
        public images: string[]
    ) {}

    static adapt(item: ApiProductResponse): Product {
        return new Product(
            item.id,
            item.name,
            item.category_id,
            item.description,
            item.price,
            item.country,
            item.color,
            item.images.map(image => image.filename)
        );
    }

}
