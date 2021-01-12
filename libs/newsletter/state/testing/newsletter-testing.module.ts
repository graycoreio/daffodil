import { NgModule } from '@angular/core';

import { DaffNewsletterFacade } from '';

import { MockDaffNewsletterFacade } from './mock-newsletter-facade';

@NgModule({
  providers: [
		{ provide: DaffNewsletterFacade, useExisting: MockDaffNewsletterFacade }
	]
})
export class DaffNewsletterTestingModule { }
