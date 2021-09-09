# Driver
The `@daffodil/configurable-product` does not provide its own driver. Instead, this package uses injector functions provided by the `@daffodil/product` package to extend the graphql product fragment and the product transformers via a provided module.

## Magento
To provide both a configurable product fragment and a configurable product transformer to the `@daffodil/product` magento driver, simply import `DaffConfigurableProductMagentoDriverModule` into the app. Both the configurable product magento graphql fragment and the associated transformer are defined by `@daffodil/configurable-product/driver/magento` and are provided to the `@daffodil/product` magento driver through the `DaffConfigurableProductMagentoDriverModule`.
