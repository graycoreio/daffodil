import { NgModule } from '@angular/core';

import { DaffNewsletterFacade } from '@daffodil/newsletter';

import { MockDaffNewsletterFacade } from './mock-newsletter-facade';

@NgModule({
  providers: [
		{ provide: DaffNewsletterFacade, useClass: MockDaffNewsletterFacade }
	]
})
export class DaffNewsletterTestingModule { }
