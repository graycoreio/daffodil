import { NgModule } from '@angular/core';

import { provideDaffCheckoutStateTesting } from './provider';

/**
 * Mocks the `@daffodil/checkout/state` facades for testing purposes.
 *
 * @deprecated in favor of {@link provideDaffCheckoutStateTesting}
 */
@NgModule({
  providers: [
    provideDaffCheckoutStateTesting(),
  ],
})
export class DaffCheckoutStateTestingModule {}
