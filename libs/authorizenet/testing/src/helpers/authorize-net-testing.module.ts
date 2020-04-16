import { NgModule } from '@angular/core';

import { DaffAuthorizeNetFacade } from '@daffodil/authorizenet';

import { MockDaffAuthorizeNetFacade } from './mock-authorize-net-facade';

@NgModule({
  providers: [
		{ provide: DaffAuthorizeNetFacade, useClass: MockDaffAuthorizeNetFacade }
	]
})
export class DaffAuthorizeNetTestingModule {}
