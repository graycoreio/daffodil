import { NgModule } from '@angular/core';

import { DaffContactFacade } from '@daffodil/contact';

import { MockDaffContactFacade } from './mock-contact-facade';

@NgModule({
	providers: [
		{ provide: DaffContactFacade, useExisting: MockDaffContactFacade }
	]
})
export class DaffContactTestingModule { }
