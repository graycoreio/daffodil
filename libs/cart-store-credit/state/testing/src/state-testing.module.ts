import { NgModule } from '@angular/core';

import { DaffCartStoreCreditPageFacade } from '@daffodil/cart-store-credit/state';
import { MockDaffOperationStateFacade } from '@daffodil/core/state/testing';

/**
 * Provides the {@link MockDaffCartStoreCreditPageFacade} for {@link DaffCartStoreCreditPageFacade}.
 */
@NgModule({
  providers: [
    { provide: DaffCartStoreCreditPageFacade, useExisting: MockDaffOperationStateFacade },
  ],
})
export class DaffCartStoreCreditStateTestingModule {}
