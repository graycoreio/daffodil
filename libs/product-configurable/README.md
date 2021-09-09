# @daffodil/product-configurable

Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/product-configurable`
provides clear interfaces, models, and factories for the frontend of an ecommerce store so that you don't have to.


## Installation

```
npm install @daffodil/product-configurable
```

The `@daffodil/product-configurable` package is intended for use in conjuction with the `@daffodil/product` package. After installing the `@daffodil/product` package, import the `DaffConfigurableProductStateModule`. This module will add the `DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY` to the app root redux state along with configurable product state.
