import { NgModule } from '@angular/core';

import { provideDaffReviewsStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffReviewsStateTesting}
 */
@NgModule({
  providers: [
    provideDaffReviewsStateTesting(),
  ],
})
export class DaffReviewsStateTestingModule {}
