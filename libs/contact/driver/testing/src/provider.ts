import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffContactDriver } from '@daffodil/contact/driver';

import { DaffTestingContactService } from './contact.service';

/**
 * Provides the testing implementation of the `@daffodil/contact/driver` interface.
 */
export const provideDaffContactTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffContactDriver(DaffTestingContactService),
]);
