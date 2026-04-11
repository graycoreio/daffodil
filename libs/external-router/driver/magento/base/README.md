# @daffodil/external-router/driver/magento/base

This package exports the same APIs as `@daffodil/external-router/driver/magento`. It is used to export the base APIs of the Magento driver through version specific Magento driver packages (e.g. `libs/external-router/driver/magento/2.4.3/src/public_api.ts`). It should not be used directly by consumers of the Magento driver. 

This package is needed because `libs/external-router/scripts/patch-magento-exports.mjs` replaces all exports of `@daffodil/external-router/driver/magento` with exports of `@daffodil/external-router/driver/magento/<version>`. Therefore, we need to export the base APIs of the Magento driver from `@daffodil/external-router/driver/magento/base` instead of `@daffodil/external-router/driver/magento`. 

Users of the Magento driver can still import all base APIs from `@daffodil/external-router/driver/magento` because base APIs are re-exported from `@daffodil/external-router/driver/magento/<version>`.