import { NgModule } from '@angular/core';

import { provideDaffCustomerStoreCreditStateTesting } from './provider';

/**
 * Provides the {@link MockDaffCustomerStoreCreditPageFacade} for {@link DaffCustomerStoreCreditPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffCustomerStoreCreditStateTesting}
 */
@NgModule({
  providers: [
    provideDaffCustomerStoreCreditStateTesting(),
  ],
})
export class DaffCustomerStoreCreditStateTestingModule {}
