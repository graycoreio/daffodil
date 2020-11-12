import { NgModule } from '@angular/core';

import { DaffCartFacade } from '@daffodil/cart/state';

import { MockDaffCartFacade } from './mock-cart-facade';

@NgModule({
  providers: [
		{ provide: DaffCartFacade, useClass: MockDaffCartFacade }
	]
})
export class DaffCartTestingModule { }
