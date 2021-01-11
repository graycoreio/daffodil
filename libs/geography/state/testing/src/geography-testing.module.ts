import { NgModule } from '@angular/core';

import { DaffGeographyFacade } from '@daffodil/geography/state';

import { MockDaffGeographyFacade } from './mock-geography-facade';

@NgModule({
  providers: [
		{ provide: DaffGeographyFacade, useExisting: MockDaffGeographyFacade }
	]
})
export class DaffGeographyTestingModule {}
