import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffReviewsDriver } from '@daffodil/reviews/driver';

import { DaffReviewsInMemoryService } from './reviews.service';

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
        {
          provide: DaffReviewsDriver,
          useExisting: DaffReviewsInMemoryService,
        },
      ],
    };
  }
}
