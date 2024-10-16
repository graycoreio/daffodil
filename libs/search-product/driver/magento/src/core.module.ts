import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';

import { DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME } from './queries/product-search';

/**
 * A module that provides product search query as a cacheable network operation.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    provideDaffMagentoCacheableOperation(DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME),
  ],
})
export class DaffSearchProductMagentoCoreModule {}
