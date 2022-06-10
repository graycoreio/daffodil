import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';
import { DAFF_SEARCH_FEDERATED_DRIVERS } from '@daffodil/search/driver/federated';

import { DaffSearchProductMagentoDriver } from './product-search.service';
import { DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME } from './queries/product-search';

/**
 * A module that provides the {@link DaffSearchProductMagentoDriver} to the federated search driver.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchProductMagentoDriverModule> {
    return {
      ngModule: DaffSearchProductMagentoDriverModule,
      providers: [
        {
          provide: DAFF_SEARCH_FEDERATED_DRIVERS,
          multi: true,
          useExisting: DaffSearchProductMagentoDriver,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME,
          multi: true,
        },
      ],
    };
  }

  static forFeature(): ModuleWithProviders<DaffSearchProductMagentoDriverModule> {
    return {
      ngModule: DaffSearchProductMagentoDriverModule,
      providers: [
        {
          provide: DAFF_SEARCH_FEDERATED_DRIVERS,
          multi: true,
          useClass: DaffSearchProductMagentoDriver,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME,
          multi: true,
        },
      ],
    };
  }
}
