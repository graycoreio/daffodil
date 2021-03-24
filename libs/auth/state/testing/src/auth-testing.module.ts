import { NgModule } from '@angular/core';

import { DaffAuthFacade } from '@daffodil/auth/state';

import { MockDaffAuthFacade } from './mock-auth-facade';

@NgModule({
  providers: [
    { provide: DaffAuthFacade, useExisting: MockDaffAuthFacade },
  ],
})
export class DaffAuthTestingModule {}
