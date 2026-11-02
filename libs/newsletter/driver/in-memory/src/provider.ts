import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffNewsletterDriver } from '@daffodil/newsletter/driver';

import { DaffInMemoryBackendNewsletterService } from './backend/public_api';
import { DaffInMemoryNewsletterService } from './drivers/newsletter.service';

/**
 * Provides the {@link DaffInMemoryNewsletterService} driver to your application.
 */
export const provideDaffNewsletterInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffNewsletterDriver(DaffInMemoryNewsletterService),
  provideDaffInMemoryBackends(DaffInMemoryBackendNewsletterService),
]);
