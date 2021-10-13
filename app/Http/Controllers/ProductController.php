<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $request->validate([
            'category_ids' => 'array',
            'category_ids.*' => 'int',
        ]);

        $products = Product::when(
                        $request->category_ids,
                        function ($query, $ids) {
                            return $query->whereIn('category_id', $ids);
                        }
                    )->get();

        return $this->respondOK($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => ['required', 'exists:categories,id'],
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric']
        ]);

        $product = Product::create($request->all()); // TODO is this safe

        return $this->respondCreated($product, 'Product has been created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::findOrFail($id); // TODO is fail exception caught?

        return $this->respondOK($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'category_id' => ['exists:categories,id'],
            'name' => ['string'],
            'description' => ['string'],
            'price' => ['numeric']
        ]);

        $product = Product::findOrFail($id)->update($request->all()); // TODO is this safe

        // TODO does update return the product?

        return $this->respondOK($product, 'Product has been updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::delete($id);

        return $this->respondOK(null, 'Product has been deleted.');
    }
}
