import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffNavigationFacade } from '@daffodil/navigation/state';

import { MockDaffNavigationFacade } from './mock-navigation.facade';

/**
 * Provides {@link MockDaffNavigationFacade} in place of {@link DaffNavigationFacade}.
 */
export const provideDaffNavigationStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffNavigationFacade, useExisting: MockDaffNavigationFacade },
]);
