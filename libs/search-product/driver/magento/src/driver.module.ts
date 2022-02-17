import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_SEARCH_FEDERATED_DRIVERS } from '@daffodil/search/driver/federated';

import { DaffSearchProductMagentoDriver } from './product-search.service';

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
      ],
    };
  }
}
