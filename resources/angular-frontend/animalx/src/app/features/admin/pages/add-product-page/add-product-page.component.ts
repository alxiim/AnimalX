import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/core/http/category/category.service';
import { ProductService } from 'src/app/core/http/product/product.service';
import { camelToSnake } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {

    form = this._fb.group({
        name: [''],
        categoryId: [''],
        description: [''],
        price: [''],
        country: [''],
        color: ['']
    });

    categories$ = this._categoryService.query();

    image: File | null = null;

    constructor(
        private _fb: FormBuilder,
        private _productService: ProductService,
        private _categoryService: CategoryService
    ) { }

    ngOnInit(): void {
    }

    createProduct() {
        if (!this.form.valid) {
            // TODO show errors
            console.log('errors');
            return;
        }

        const product: FormData = new FormData();

        // Add product details to form data
        for (const key in this.form.value) {
            product.append(camelToSnake(key), this.form.value[key]);
        }

        // Add product image to form data
        if (this.image) {
            product.append('image', this.image, this.image.name);
        }

        this._productService.create(product)
            .subscribe(product => {
                console.log(product);
                // TODO show response and redirect
                // TODO catch errors
            });
    }

    createCategory() {
        const name = prompt('Geef een naam op voor de nieuwe categorie');
        if (name) {
            this._categoryService.create({
                name: name
            }).subscribe(() => {
                // Refresh the categories
                this.categories$ = this._categoryService.query();
            });
        }
    }

    handleFileInput(event: any) {
        const files = event.target.files;
        this.image = files.item(0);
    }

}
