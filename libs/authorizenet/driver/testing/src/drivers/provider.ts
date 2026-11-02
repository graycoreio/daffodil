import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffAuthorizeNetDriver } from '@daffodil/authorizenet/driver';

import { DaffTestingAuthorizeNetService } from './authorize-net.service';

/**
 * Provides the testing implementations of the `@daffodil/authorizenet/driver` interfaces.
 */
export const provideDaffAuthorizeNetTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffAuthorizeNetDriver(DaffTestingAuthorizeNetService),
]);
