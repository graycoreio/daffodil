import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffSearchCategoryMagentoDriver,
  provideDaffSearchCategoryMagentoFeatureDriver,
} from './provider';

/**
 * A module that provides product search query as a cacheable network operation.
 *
 * @deprecated in favor of {@link provideDaffSearchCategoryMagentoDriver}
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
        provideDaffSearchCategoryMagentoDriver(),
      ],
    };
  }

  static forFeature(): ModuleWithProviders<DaffSearchCategoryMagentoDriverModule> {
    return {
      ngModule: DaffSearchCategoryMagentoDriverModule,
      providers: [
        provideDaffSearchCategoryMagentoFeatureDriver(),
      ],
    };
  }
}
