import { Provider } from '@angular/core';

import { provideManyDaffMagentoCacheableOperations } from '@daffodil/driver/magento';
import {
  provideDaffProductDriver,
  provideDaffProductCustomAttributeDriver,
} from '@daffodil/product/driver';

import {
  DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME,
  DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME,
  DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME,
  DAFF_MAGENTO_GET_ATTRIBUTES_LIST_QUERY_NAME,
  DaffMagentoProductCustomAttributeService,
  DaffMagentoProductService,
  DaffProductMagentoDriverConfig,
  MAGENTO_PRODUCT_CONFIG_DEFAULT,
  provideMagentoProductConfig,
} from './public_api';

export const provideDaffProductMagentoDriver = (config: DaffProductMagentoDriverConfig = MAGENTO_PRODUCT_CONFIG_DEFAULT): Provider[] => [
  provideDaffProductDriver(DaffMagentoProductService),
  provideDaffProductCustomAttributeDriver(DaffMagentoProductCustomAttributeService),
  provideManyDaffMagentoCacheableOperations(
    DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME,
    DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME,
    DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME,
    DAFF_MAGENTO_GET_ATTRIBUTES_LIST_QUERY_NAME,
  ),
  provideMagentoProductConfig(config),
];
