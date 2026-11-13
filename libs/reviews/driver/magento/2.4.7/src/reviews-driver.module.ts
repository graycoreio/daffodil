import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffReviewsMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffReviewsMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffReviewsMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffReviewsMagentoDriverModule> {
    return {
      ngModule: DaffReviewsMagentoDriverModule,
      providers: [
        provideDaffReviewsMagentoDriver(),
      ],
    };
  }
}
