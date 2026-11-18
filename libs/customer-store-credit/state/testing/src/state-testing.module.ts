import { NgModule } from '@angular/core';

import { provideDaffCustomerStoreCreditStateTesting } from './provider';

/**
 * Provides the {@link MockDaffCustomerStoreCreditPageFacade} for {@link DaffCustomerStoreCreditPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffCustomerStoreCreditStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCustomerStoreCreditStateTesting(),
  ],
})
export class DaffCustomerStoreCreditStateTestingModule {}
