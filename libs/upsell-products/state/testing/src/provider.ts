import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffUpsellProductsFacade } from '@daffodil/upsell-products/state';

import { MockDaffUpsellProductsFacade } from './mock-upsell-products.facade';

/**
 * Provides the mock upsell products facade in place of the real one.
 */
export const provideDaffUpsellProductsStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffUpsellProductsFacade, useExisting: MockDaffUpsellProductsFacade },
]);
