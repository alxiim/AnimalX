import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/core/http/category/category.service';
import { ProductService } from 'src/app/core/http/product/product.service';

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

        this._productService.create(this.form.value)
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

}
