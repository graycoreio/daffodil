import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';

import { DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME } from './queries/product-search';

/**
 * A module that provides product search query as a cacheable network operation.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
      useValue: DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME,
      multi: true,
    },
  ],
})
export class DaffSearchProductMagentoCoreModule {}
