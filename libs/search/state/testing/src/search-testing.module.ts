import { NgModule } from '@angular/core';

import { DaffSearchFacade } from '@daffodil/search/state';

import { MockDaffSearchFacade } from './mock-search-facade';

/**
 * Provides the {@link MockDaffSearchFacade} for {@link DaffSearchFacade}.
 */
@NgModule({
  providers: [
    { provide: DaffSearchFacade, useExisting: MockDaffSearchFacade },
  ],
})
export class DaffSearchTestingModule {}
