import { NgModule } from '@angular/core';

import { DaffDocsFacade } from '@daffodil/docs/state';

import { MockDaffDocsFacade } from './mock.facade';

@NgModule({
  providers: [
    { provide: DaffDocsFacade, useExisting: MockDaffDocsFacade },
  ],
})
export class DaffDocsStateTestingModule {}
