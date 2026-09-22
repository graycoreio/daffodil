import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffReviewsDriver } from '@daffodil/reviews/driver';

import { DaffReviewsInMemoryService } from './reviews.service';
import { DaffReviewsInMemoryBackendService } from '../backend/reviews.service';

/**
 * Provides the in-memory implementation of the `@daffodil/reviews/driver` interface along with its backend.
 */
export const provideDaffReviewsInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffReviewsDriver(DaffReviewsInMemoryService),
  provideDaffInMemoryBackends(DaffReviewsInMemoryBackendService),
]);
