import { NgModule } from '@angular/core';

import { DaffCartFacade } from '@daffodil/cart/state';

import { MockDaffCartFacade } from './mock-cart-facade';

@NgModule({
  providers: [
		{ provide: DaffCartFacade, useExisting: MockDaffCartFacade }
	]
})
export class DaffCartTestingModule { }
