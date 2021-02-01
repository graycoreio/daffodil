import { NgModule } from '@angular/core';

import { DaffContactFacade } from '@daffodil/contact/state';

import { MockDaffContactFacade } from './mock-contact-facade';

@NgModule({
  providers: [{ provide: DaffContactFacade, useClass: MockDaffContactFacade }],
})
export class DaffContactStateTestingModule {}
