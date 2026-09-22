import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffAuthorizeNetFacade } from '@daffodil/authorizenet/state';

import { MockDaffAuthorizeNetFacade } from './mock-authorize-net-facade';

/**
 * Provides the {@link MockDaffAuthorizeNetFacade} for {@link DaffAuthorizeNetFacade}.
 */
export const provideDaffAuthorizeNetStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffAuthorizeNetFacade, useExisting: MockDaffAuthorizeNetFacade },
]);
