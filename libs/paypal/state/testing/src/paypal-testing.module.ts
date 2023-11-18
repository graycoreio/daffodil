import { NgModule } from '@angular/core';

import { DaffPaypalFacade } from '@daffodil/paypal/state';

import { MockDaffPaypalFacade } from './mock-paypal-facade';

@NgModule({
  providers: [
    { provide: DaffPaypalFacade, useExisting: MockDaffPaypalFacade },
  ],
})
export class DaffPaypalStateTestingModule { }
