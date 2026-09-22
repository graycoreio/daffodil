import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffCheckoutPlacedOrderFacade } from '@daffodil/checkout/state';

import { MockDaffCheckoutPlacedOrderFacade } from './mock-placed-order-facade';

/**
 * Mocks the `@daffodil/checkout/state` facades for testing purposes.
 */
export const provideDaffCheckoutStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCheckoutPlacedOrderFacade, useExisting: MockDaffCheckoutPlacedOrderFacade },
]);
