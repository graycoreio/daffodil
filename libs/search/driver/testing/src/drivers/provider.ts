import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffSearchDriver } from '@daffodil/search/driver';

import { DaffTestingSearchDriver } from './search.service';

/**
 * Provides the {@link DaffTestingSearchDriver} as the {@link DaffSearchDriver}.
 */
export const provideDaffSearchTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchDriver(DaffTestingSearchDriver),
]);
