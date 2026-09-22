import { NgModule } from '@angular/core';

import { provideDaffReviewsTesting } from './provider';

/**
 * Provides the reviewed product as an extra product factory.
 *
 * @deprecated in favor of {@link provideDaffReviewsTesting}
 */
@NgModule({
  providers: [
    provideDaffReviewsTesting(),
  ],
})
export class DaffReviewTestingModule { }
