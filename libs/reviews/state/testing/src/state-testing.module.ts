import { NgModule } from '@angular/core';

import { provideDaffReviewsStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffReviewsStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffReviewsStateTesting(),
  ],
})
export class DaffReviewsStateTestingModule {}
