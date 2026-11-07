import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffReviewsTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffReviewsTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffReviewsTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffReviewsTestingDriverModule> {
    return {
      ngModule: DaffReviewsTestingDriverModule,
      providers: [
        provideDaffReviewsTestingDriver(),
      ],
    };
  }
}
