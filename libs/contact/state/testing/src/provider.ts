import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffContactFacade } from '@daffodil/contact/state';

import { MockDaffContactFacade } from './mock-contact-facade';

/**
 * Provides the {@link MockDaffContactFacade} for {@link DaffContactFacade}.
 */
export const provideDaffContactStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffContactFacade, useClass: MockDaffContactFacade },
]);
