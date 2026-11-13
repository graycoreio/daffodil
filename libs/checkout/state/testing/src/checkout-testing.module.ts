import { NgModule } from '@angular/core';

import { provideDaffCheckoutStateTesting } from './provider';

/**
 * Mocks the `@daffodil/checkout/state` facades for testing purposes.
 *
 * @deprecated in favor of {@link provideDaffCheckoutStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCheckoutStateTesting(),
  ],
})
export class DaffCheckoutStateTestingModule {}
