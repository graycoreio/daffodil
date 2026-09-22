import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffCompositeProductFacade } from '@daffodil/product-composite/state';

import { MockDaffCompositeProductFacade } from './mock-composite-product-facade';

/**
 * Provides the mock composite product facade in place of the real one.
 */
export const provideDaffProductCompositeStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCompositeProductFacade, useExisting: MockDaffCompositeProductFacade },
]);
