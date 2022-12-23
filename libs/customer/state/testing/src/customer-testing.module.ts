import { NgModule } from '@angular/core';

import { DaffCustomerPageFacade } from '@daffodil/customer/state';

import { MockDaffCustomerPageFacade } from './mock-customer-facade';

/**
 * Provides the {@link MockDaffCustomerPageFacade} for {@link DaffCustomerPageFacade}.
 */
@NgModule({
  providers: [
    { provide: DaffCustomerPageFacade, useExisting: MockDaffCustomerPageFacade },
  ],
})
export class DaffCustomerStateTestingModule {}
