import { NgModule } from '@angular/core';

import { provideDaffCustomerStateTesting } from './provider';

/**
 * Provides the {@link MockDaffCustomerPageFacade} for {@link DaffCustomerPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffCustomerStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCustomerStateTesting(),
  ],
})
export class DaffCustomerStateTestingModule {}
