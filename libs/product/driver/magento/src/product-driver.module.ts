import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';
import { DaffProductDriver } from '@daffodil/product/driver';

import { MAGENTO_PRODUCT_CONFIG_DEFAULT } from './config/public_api';
import {
  DaffProductMagentoDriverConfig,
  MAGENTO_PRODUCT_CONFIG_TOKEN,
} from './interfaces/public_api';
import { DaffMagentoProductService } from './product.service';
import { DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME } from './queries/get-all-products';
import { DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME } from './queries/get-product';
import { DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME } from './queries/get-product-by-url';

/**
 * A module that provides the {@link DaffProductDriver} and {@link DaffProductMagentoDriverConfig} as the {@link DaffMagentoProductService} and
 * {@link MAGENTO_PRODUCT_CONFIG_DEFAULT} respectively
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffProductMagentoDriverModule {
  static forRoot(config: DaffProductMagentoDriverConfig = MAGENTO_PRODUCT_CONFIG_DEFAULT): ModuleWithProviders<DaffProductMagentoDriverModule> {
    return {
      ngModule: DaffProductMagentoDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffMagentoProductService,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME,
          multi: true,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME,
          multi: true,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME,
          multi: true,
        },
        {
          provide: MAGENTO_PRODUCT_CONFIG_TOKEN,
          useValue: {
            ...MAGENTO_PRODUCT_CONFIG_DEFAULT,
            ...config,
          },
        },
      ],
    };
  }
}
