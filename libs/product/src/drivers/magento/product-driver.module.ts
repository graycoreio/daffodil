import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';

import { DaffProductDriver } from '../injection-tokens/product-driver.token';
import { DaffMagentoProductService } from './product.service';
import { DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME } from './queries/get-product';
import { DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME } from './queries/get-all-products';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductMagentoDriverModule> {
    return {
      ngModule: DaffProductMagentoDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffMagentoProductService
				},
				{
					provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
					useValue: DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME,
					multi: true
				},
				{
					provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
					useValue: DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME,
					multi: true
				}
      ]
    };
  }
}
