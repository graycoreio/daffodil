# @daffodil/composite-product

Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/composite-product`
provides clear interfaces, models, and factories for the frontend of an ecommerce store so that you don't have to.


## Installation

```
npm install @daffodil/composite-product
```

The `@daffodil/composite-product` package is intended for use in conjuction with the `@daffodil/product` package. After installing the `@daffodil/product` package, import the `DaffCompositeProductStateModule`. This module will add the `DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY` to the app root redux state along with composite product state.
