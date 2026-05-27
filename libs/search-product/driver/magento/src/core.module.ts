import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { provideManyDaffMagentoCacheableOperations } from '@daffodil/driver/magento';

import {
  DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME,
  DAFF_SEARCH_PRODUCT_MAGENTO_INCREMENTAL_QUERY_NAME,
} from './queries/public_api';

/**
 * A module that provides product search query as a cacheable network operation.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    provideManyDaffMagentoCacheableOperations(
      DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME,
      DAFF_SEARCH_PRODUCT_MAGENTO_INCREMENTAL_QUERY_NAME,
    ),
  ],
})
export class DaffSearchProductMagentoCoreModule {}
