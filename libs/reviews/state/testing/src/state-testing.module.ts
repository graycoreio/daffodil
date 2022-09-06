import { NgModule } from '@angular/core';

import {
  DaffProductPageReviewsCollectionFacade,
  DaffProductPageReviewsFacade,
  DaffProductReviewsFacade,
} from '@daffodil/reviews/state';

import { MockDaffProductPageReviewsFacade } from './mock-product-page-reviews-facade';
import { MockDaffProductReviewsFacade } from './mock-product-reviews-facade';
import { MockDaffProductPageReviewsCollectionFacade } from './mock-reviews-collection-facade';


@NgModule({
  providers: [
    { provide: DaffProductPageReviewsFacade, useExisting: MockDaffProductPageReviewsFacade },
    { provide: DaffProductReviewsFacade, useExisting: MockDaffProductReviewsFacade },
    { provide: DaffProductPageReviewsCollectionFacade, useExisting: MockDaffProductPageReviewsCollectionFacade },
  ],
})
export class DaffReviewsStateTestingModule {}
