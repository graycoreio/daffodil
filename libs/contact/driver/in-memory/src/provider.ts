import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffContactDriver } from '@daffodil/contact/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffInMemoryBackendContactService } from './backend/contact.service';
import { DaffInMemoryContactService } from './drivers/contact.service';

/**
 * Provides the in-memory implementation of the `@daffodil/contact/driver` interface.
 */
export const provideDaffContactInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffContactDriver(DaffInMemoryContactService),
  provideDaffInMemoryBackends(DaffInMemoryBackendContactService),
]);
