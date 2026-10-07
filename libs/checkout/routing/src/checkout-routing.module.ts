import { NgModule } from '@angular/core';

import { DaffCheckoutPlacedOrderGuardRedirectUrl } from './placed-order/public_api';

@NgModule({
  providers: [
    { provide: DaffCheckoutPlacedOrderGuardRedirectUrl, useValue: '/' },
  ],
})
export class DaffCheckoutRoutingModule {}
