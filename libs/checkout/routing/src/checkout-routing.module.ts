import { NgModule } from '@angular/core';

import { DaffCheckoutPlacedOrderGuardRedirectUrl } from './guards/public_api';

@NgModule({
  providers: [
    { provide: DaffCheckoutPlacedOrderGuardRedirectUrl, useValue: '/' },
  ],
})
export class DaffCheckoutRoutingModule {}
