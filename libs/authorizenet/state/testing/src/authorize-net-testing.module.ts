import { NgModule } from '@angular/core';

import { DaffAuthorizeNetFacade } from '@daffodil/authorizenet/state';

import { MockDaffAuthorizeNetFacade } from './mock-authorize-net-facade';

@NgModule({
  providers: [
		{ provide: DaffAuthorizeNetFacade, useClass: MockDaffAuthorizeNetFacade }
	]
})
export class DaffAuthorizeNetTestingModule {}
