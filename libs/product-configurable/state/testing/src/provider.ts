import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffConfigurableProductFacade } from '@daffodil/product-configurable/state';

import { MockDaffConfigurableProductFacade } from './mock-configurable-product-facade';

/**
 * Provides the mock configurable product facade in place of the real one.
 */
export const provideDaffProductConfigurableStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffConfigurableProductFacade, useExisting: MockDaffConfigurableProductFacade },
]);
