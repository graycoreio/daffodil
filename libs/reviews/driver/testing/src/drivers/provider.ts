import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffReviewsDriver } from '@daffodil/reviews/driver';

import { DaffReviewsTestingService } from './reviews.service';

/**
 * Provides the {@link DaffReviewsTestingService} as the reviews driver.
 */
export const provideDaffReviewsTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffReviewsDriver(DaffReviewsTestingService),
]);
