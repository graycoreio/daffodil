import { NgModule } from '@angular/core';

import { DaffPaypalFacade } from '@daffodil/paypal';

import { MockDaffPaypalFacade } from './mock-paypal-facade';

@NgModule({
  providers: [
		{ provide: DaffPaypalFacade, useClass: MockDaffPaypalFacade }
	]
})
export class DaffPaypalTestingModule { }
