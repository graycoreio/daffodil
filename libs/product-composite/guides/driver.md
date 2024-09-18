# Driver
`@daffodil/product-composite` does not provide its own driver. Instead, it hooks into extension mechanisms exposed by `@daffodil/product` to extend the `@daffodil/product` driver via a provided module.

## Magento
To provide both a composite product fragment and a composite product transformer to the `@daffodil/product` Magento driver, simply import `DaffCompositeProductMagentoDriverModule` into the app. Both the composite product Magento GraphQL fragment and the associated transformer are defined by `@daffodil/product-composite/driver/magento` and are provided to the `@daffodil/product` Magento driver through the `DaffCompositeProductMagentoDriverModule`.
