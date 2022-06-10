import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffSearchDriver } from '@daffodil/search/driver';

import { DaffSearchProductMagentoCoreModule } from './core.module';
import { DaffSearchProductMagentoDriver } from './product-search.service';

@NgModule({
  imports: [
    CommonModule,
    DaffSearchProductMagentoCoreModule,
  ],
})
export class DaffSearchProductMagentoDriverModule {
  /**
   * A module that provides the singleton of the product search Magento driver as the search driver.
   */
  static forRoot(): ModuleWithProviders<DaffSearchProductMagentoDriverModule> {
    return {
      ngModule: DaffSearchProductMagentoDriverModule,
      providers: [
        {
          provide: DaffSearchDriver,
          useExisting: DaffSearchProductMagentoDriver,
        },
      ],
    };
  }
}
