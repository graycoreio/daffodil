import { NgModule } from '@angular/core';

import { DaffCheckoutPlacedOrderFacade } from '@daffodil/checkout/state';

import { MockDaffCheckoutPlacedOrderFacade } from './mock-placed-order-facade';

/**
 * Mocks the `@daffodil/checkout/state` facades for testing purposes.
 */
@NgModule({
  providers: [
    { provide: DaffCheckoutPlacedOrderFacade, useExisting: MockDaffCheckoutPlacedOrderFacade },
  ],
})
export class DaffCheckoutTestingModule {}
