import { NgModule } from '@angular/core';

import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import {
  DaffSearchProductCollectionFacade,
  DaffSearchProductIncrementalFacade,
  DaffSearchProductPageFacade,
} from '@daffodil/search-product/state';

import { MockDaffSearchProductFacade } from './mock-search-facade';

/**
 * Provides the {@link MockDaffSearchProductFacade} for {@link DaffSearchProductFacade}.
 */
@NgModule({
  providers: [
    { provide: DaffSearchProductPageFacade, useExisting: MockDaffSearchProductFacade },
    { provide: DaffSearchProductIncrementalFacade, useExisting: MockDaffSearchProductFacade },
    { provide: DaffSearchProductCollectionFacade, useExisting: MockDaffCollectionFacade },
  ],
})
export class DaffSearchProductStateTestingModule {}
