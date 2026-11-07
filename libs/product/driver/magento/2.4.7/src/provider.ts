import { Provider } from '@angular/core';

import { provideManyDaffMagentoCacheableOperations } from '@daffodil/driver/magento/2.4.7';
import { provideDaffProductDriver } from '@daffodil/product/driver';

import { MAGENTO_PRODUCT_CONFIG_DEFAULT } from './config/public_api';
import {
  DaffProductMagentoDriverConfig,
  provideMagentoProductConfig,
} from './interfaces/public_api';
import { DaffMagentoProductService } from './product.service';
import { DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME } from './queries/get-all-products';
import { DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME } from './queries/get-product';
import { DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME } from './queries/get-product-by-url/query';

export const provideDaffProductMagentoDriver = (config: DaffProductMagentoDriverConfig = MAGENTO_PRODUCT_CONFIG_DEFAULT): Provider[] => [
  provideDaffProductDriver(DaffMagentoProductService),
  provideManyDaffMagentoCacheableOperations(
    DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME,
    DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME,
    DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME,
  ),
  provideMagentoProductConfig(config),
];
