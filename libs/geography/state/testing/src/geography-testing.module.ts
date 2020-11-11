import { NgModule } from '@angular/core';

import { DaffGeographyFacade } from '@daffodil/geography/state';

import { MockDaffGeographyFacade } from './mock-geography-facade';

@NgModule({
  providers: [
		{ provide: DaffGeographyFacade, useClass: MockDaffGeographyFacade }
	]
})
export class DaffGeographyTestingModule {}
