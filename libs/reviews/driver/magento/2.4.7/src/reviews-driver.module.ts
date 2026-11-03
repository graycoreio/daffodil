import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffReviewsMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffReviewsMagentoDriver}
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
