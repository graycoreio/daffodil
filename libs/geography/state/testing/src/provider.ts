import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffGeographyFacade } from '@daffodil/geography/state';

import { MockDaffGeographyFacade } from './mock-geography-facade';

/**
 * Provides {@link MockDaffGeographyFacade} in place of {@link DaffGeographyFacade}.
 */
export const provideDaffGeographyStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffGeographyFacade, useExisting: MockDaffGeographyFacade },
]);
