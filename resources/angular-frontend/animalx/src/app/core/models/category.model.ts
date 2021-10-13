export interface ApiCategoryResponse {
    id: number;
    name: string;
}

export interface ApiCreateCategory {
    name: string;
}

export interface ApiUpdateCategory {
    name: string;
}

export class Category {

    constructor(
        public id: number,
        public name: string
    ) {}

    static adapt(item: ApiCategoryResponse): Category {
        return new Category(
            item.id,
            item.name
        );
    }

}
