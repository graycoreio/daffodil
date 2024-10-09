import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { DaffReviewsDriver } from '@daffodil/reviews/driver';

import { DaffReviewsInMemoryService } from './reviews.service';
import { DaffReviewsInMemoryBackendService } from '../backend/reviews.service';

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
        provideDaffInMemoryBackends(DaffReviewsInMemoryBackendService),
      ],
    };
  }
}
