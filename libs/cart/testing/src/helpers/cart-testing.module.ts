import { NgModule } from '@angular/core';

import { DaffCartFacade, DaffCartPaymentMethodIdMap } from '@daffodil/cart';

import { MockDaffCartFacade } from './mock-cart-facade';

@NgModule({
  providers: [
		{ provide: DaffCartPaymentMethodIdMap, useValue: {} },
		{ provide: DaffCartFacade, useClass: MockDaffCartFacade }
	]
})
export class DaffCartTestingModule { }
