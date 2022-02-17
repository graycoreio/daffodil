import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_SEARCH_FEDERATED_DRIVERS } from '@daffodil/search/driver/federated';

import { DaffSearchCategoryMagentoDriver } from './category-search.service';

/**
 * A module that provides the {@link DaffSearchCategoryMagentoDriver} to the federated search driver.
 */
@NgModule({
  imports: [
    CommonModule,
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
}
