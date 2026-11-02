import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffRelatedProductsFacade } from '@daffodil/related-products/state';

import { MockDaffRelatedProductsFacade } from './mock-related-products.facade';

/**
 * Provides the mock related products facade in place of the real one.
 */
export const provideDaffRelatedProductsStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffRelatedProductsFacade, useExisting: MockDaffRelatedProductsFacade },
]);
