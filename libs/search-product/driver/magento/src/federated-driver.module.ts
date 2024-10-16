import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DAFF_SEARCH_FEDERATED_DRIVERS,
  provideDaffSearchFederatedDrivers,
} from '@daffodil/search/driver/federated';

import { DaffSearchProductMagentoCoreModule } from './core.module';
import { DaffSearchProductMagentoDriver } from './product-search.service';

/**
 * A module that provides product search query as a cacheable network operation.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffSearchProductMagentoCoreModule,
  ],
})
export class DaffSearchProductMagentoFederatedDriverModule {
  /**
   * A module that provides the singleton of the product search Magento driver as a federated driver.
   */
  static forRoot(): ModuleWithProviders<DaffSearchProductMagentoFederatedDriverModule> {
    return {
      ngModule: DaffSearchProductMagentoFederatedDriverModule,
      providers: [
        provideDaffSearchFederatedDrivers(DaffSearchProductMagentoDriver),
      ],
    };
  }

  /**
   * A module that provides a new instance of the product search Magento driver as a federated driver.
   */
  static forFeature(): ModuleWithProviders<DaffSearchProductMagentoFederatedDriverModule> {
    return {
      ngModule: DaffSearchProductMagentoFederatedDriverModule,
      providers: [
        {
          provide: DAFF_SEARCH_FEDERATED_DRIVERS,
          multi: true,
          useClass: DaffSearchProductMagentoDriver,
        },
      ],
    };
  }
}
