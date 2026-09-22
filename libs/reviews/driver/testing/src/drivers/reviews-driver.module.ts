import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffReviewsTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffReviewsTestingDriver}
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
