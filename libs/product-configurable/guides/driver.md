# Driver
`@daffodil/product-configurable` does not provide its own driver. Instead, it hooks into extension mechanisms exposed by `@daffodil/product` to extend the `@daffodil/product` driver via a provided module.

## Magento
To provide both a configurable product fragment and a configurable product transformer to the `@daffodil/product` Magento driver, simply import `DaffConfigurableProductMagentoDriverModule` into the app. Both the configurable product Magento GraphQL fragment and the associated transformer are defined by `@daffodil/product-configurable/driver/magento` and are provided to the `@daffodil/product` Magento driver through the `DaffConfigurableProductMagentoDriverModule`.
