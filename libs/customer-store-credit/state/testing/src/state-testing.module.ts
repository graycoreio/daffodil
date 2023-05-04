import { NgModule } from '@angular/core';

import { DaffCustomerStoreCreditPageFacade } from '@daffodil/customer-store-credit/state';

import { MockDaffCustomerStoreCreditPageFacade } from './mock-facade';

/**
 * Provides the {@link MockDaffCustomerStoreCreditPageFacade} for {@link DaffCustomerStoreCreditPageFacade}.
 */
@NgModule({
  providers: [
    { provide: DaffCustomerStoreCreditPageFacade, useExisting: MockDaffCustomerStoreCreditPageFacade },
  ],
})
export class DaffCustomerStoreCreditStateTestingModule {}
