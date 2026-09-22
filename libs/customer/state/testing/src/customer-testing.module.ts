import { NgModule } from '@angular/core';

import { provideDaffCustomerStateTesting } from './provider';

/**
 * Provides the {@link MockDaffCustomerPageFacade} for {@link DaffCustomerPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffCustomerStateTesting}
 */
@NgModule({
  providers: [
    provideDaffCustomerStateTesting(),
  ],
})
export class DaffCustomerStateTestingModule {}
