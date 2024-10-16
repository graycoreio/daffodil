import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffReviewsDriver } from '@daffodil/reviews/driver';

import { DaffReviewsTestingService } from './reviews.service';

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
        provideDaffReviewsDriver(DaffReviewsTestingService),
      ],
    };
  }
}
