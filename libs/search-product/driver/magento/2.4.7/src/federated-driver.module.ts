import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffSearchProductMagentoFederatedDriver,
  provideDaffSearchProductMagentoFederatedFeatureDriver,
} from './provider';

/**
 * A module that provides product search query as a cacheable network operation.
 *
 * @deprecated in favor of {@link provideDaffSearchProductMagentoFederatedDriver}
 */
@NgModule({
  imports: [
    CommonModule,
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
        provideDaffSearchProductMagentoFederatedDriver(),
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
        provideDaffSearchProductMagentoFederatedFeatureDriver(),
      ],
    };
  }
}
