# Driver
The `@daffodil/composite-product` does not provide its own driver. Instead, this package hooks into extension mechanisms exposed by the `@daffodil/product` package to extend the `@daffodil/product` driver via a provided module.

## Magento
To provide both a composite product fragment and a composite product transformer to the `@daffodil/product` magento driver, simply import `DaffCompositeProductMagentoDriverModule` into the app. Both the composite product magento graphql fragment and the associated transformer are defined by `@daffodil/composite-product/driver/magento` and are provided to the `@daffodil/product` magento driver through the `DaffCompositeProductMagentoDriverModule`.