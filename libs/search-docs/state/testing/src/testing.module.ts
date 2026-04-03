import { NgModule } from '@angular/core';

import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import {
  DaffSearchDocsCollectionFacade,
  DaffSearchDocsIncrementalFacade,
  DaffSearchDocsPageFacade,
} from '@daffodil/search-docs/state';

import { MockDaffSearchDocsFacade } from './mock-search-facade';

/**
 * Provides the {@link MockDaffSearchDocsFacade} for {@link DaffSearchDocsFacade}.
 */
@NgModule({
  providers: [
    { provide: DaffSearchDocsPageFacade, useExisting: MockDaffSearchDocsFacade },
    { provide: DaffSearchDocsIncrementalFacade, useExisting: MockDaffSearchDocsFacade },
    { provide: DaffSearchDocsCollectionFacade, useExisting: MockDaffCollectionFacade },
  ],
})
export class DaffSearchDocsStateTestingModule {}
