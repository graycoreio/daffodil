import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';
import { DAFF_SEARCH_FEDERATED_DRIVERS } from '@daffodil/search/driver/federated';

import { DaffSearchCategoryMagentoDriver } from './category-search.service';
import { DAFF_MAGENTO_SEARCH_FOR_CATEGORIES_QUERY_NAME } from './queries/category-search';

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
      useValue: DAFF_MAGENTO_SEARCH_FOR_CATEGORIES_QUERY_NAME,
      multi: true,
    },
  ],
})
export class DaffSearchCategoryMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchCategoryMagentoDriverModule> {
    return {
      ngModule: DaffSearchCategoryMagentoDriverModule,
      providers: [
        {
          provide: DAFF_SEARCH_FEDERATED_DRIVERS,
          multi: true,
          useExisting: DaffSearchCategoryMagentoDriver,
        },
      ],
    };
  }

  static forFeature(): ModuleWithProviders<DaffSearchCategoryMagentoDriverModule> {
    return {
      ngModule: DaffSearchCategoryMagentoDriverModule,
      providers: [
        {
          provide: DAFF_SEARCH_FEDERATED_DRIVERS,
          multi: true,
          useClass: DaffSearchCategoryMagentoDriver,
        },
      ],
    };
  }
}
