import { NgModule } from '@angular/core';

import { DaffPlacedOrderGuardRedirectUrl } from './guards/public_api';

@NgModule({
  providers: [
    { provide: DaffPlacedOrderGuardRedirectUrl, useValue: '/' },
  ],
})
export class DaffOrderRoutingModule {}
