import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffCartStoreCreditPageFacade } from '@daffodil/cart-store-credit/state';
import { MockDaffOperationStateFacade } from '@daffodil/core/state/testing';

/**
 * Provides the {@link MockDaffOperationStateFacade} for {@link DaffCartStoreCreditPageFacade}.
 */
export const provideDaffCartStoreCreditStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCartStoreCreditPageFacade, useExisting: MockDaffOperationStateFacade },
]);
