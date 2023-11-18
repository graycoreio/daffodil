import { NgModule } from '@angular/core';

import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import {
  DaffOrderCollectionFacade,
  DaffOrderFacade,
} from '@daffodil/order/state';

import { MockDaffOrderFacade } from './mock-order-facade';

@NgModule({
  providers: [
    { provide: DaffOrderFacade, useExisting: MockDaffOrderFacade },
    { provide: DaffOrderCollectionFacade, useExisting: MockDaffCollectionFacade },
  ],
})
export class DaffOrderStateTestingModule {}
