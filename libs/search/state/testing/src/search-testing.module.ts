import { NgModule } from '@angular/core';

import {
  DaffSearchIncrementalFacade,
  DaffSearchPageFacade,
} from '@daffodil/search/state';

import { MockDaffSearchFacade } from './mock-search-facade';

/**
 * Provides the {@link MockDaffSearchFacade} for {@link DaffSearchFacade}.
 */
@NgModule({
  providers: [
    { provide: DaffSearchPageFacade, useExisting: MockDaffSearchFacade },
    { provide: DaffSearchIncrementalFacade, useExisting: MockDaffSearchFacade },
  ],
})
export class DaffSearchStateTestingModule {}
