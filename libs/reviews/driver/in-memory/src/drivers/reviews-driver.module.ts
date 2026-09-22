import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffReviewsInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffReviewsInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffReviewsInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffReviewsInMemoryDriverModule> {
    return {
      ngModule: DaffReviewsInMemoryDriverModule,
      providers: [
        provideDaffReviewsInMemoryDriver(),
      ],
    };
  }
}
