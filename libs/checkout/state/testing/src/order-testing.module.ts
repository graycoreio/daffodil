import { NgModule } from '@angular/core';

import { DaffCheckoutPlacedOrderFacade } from '@daffodil/checkout/state';

import { MockDaffCheckoutPlacedOrderFacade } from './mock-placed-order-facade';

@NgModule({
  providers: [
    { provide: DaffCheckoutPlacedOrderFacade, useExisting: MockDaffCheckoutPlacedOrderFacade },
  ],
})
export class DaffCheckoutTestingModule {}
