import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffNewsletterDriver } from '@daffodil/newsletter/driver';

import { DaffTestingNewsletterService } from './drivers/newsletter.service';

/**
 * Provides the testing implementation of the `@daffodil/newsletter/driver` interface.
 */
export const provideDaffNewsletterTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffNewsletterDriver(DaffTestingNewsletterService),
]);
