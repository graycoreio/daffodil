import { NgModule } from '@angular/core';

import { provideDaffReviewsTesting } from './provider';

/**
 * Provides the reviewed product as an extra product factory.
 *
 * @deprecated in favor of {@link provideDaffReviewsTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffReviewsTesting(),
  ],
})
export class DaffReviewTestingModule { }
