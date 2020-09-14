import { NgModule } from '@angular/core';

import { DaffCartFacade, DaffCartPaymentMethodMap } from '@daffodil/cart';

import { MockDaffCartFacade } from './mock-cart-facade';

@NgModule({
  providers: [
		{ provide: DaffCartPaymentMethodMap, useValue: {} },
		{ provide: DaffCartFacade, useClass: MockDaffCartFacade }
	]
})
export class DaffCartTestingModule { }
