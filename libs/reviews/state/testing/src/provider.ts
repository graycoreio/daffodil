import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import {
  DaffProductPageReviewsCollectionFacade,
  DaffProductPageReviewsFacade,
  DaffProductReviewsFacade,
} from '@daffodil/reviews/state';

import { MockDaffProductPageReviewsFacade } from './mock-product-page-reviews-facade';
import { MockDaffProductReviewsFacade } from './mock-product-reviews-facade';

/**
 * Provides the mock reviews facades in place of the real ones.
 */
export const provideDaffReviewsStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffProductPageReviewsFacade, useExisting: MockDaffProductPageReviewsFacade },
  { provide: DaffProductReviewsFacade, useExisting: MockDaffProductReviewsFacade },
  { provide: DaffProductPageReviewsCollectionFacade, useExisting: MockDaffCollectionFacade },
]);
