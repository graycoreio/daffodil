# Driver
The `@daffodil/product-configurable` does not provide its own driver. Instead, this package hooks into extension mechanisms exposed by the `@daffodil/product` package to extend the `@daffodil/product` driver via a provided module.

## Magento
To provide both a configurable product fragment and a configurable product transformer to the `@daffodil/product` magento driver, simply import `DaffConfigurableProductMagentoDriverModule` into the app. Both the configurable product magento graphql fragment and the associated transformer are defined by `@daffodil/product-configurable/driver/magento` and are provided to the `@daffodil/product` magento driver through the `DaffConfigurableProductMagentoDriverModule`.
