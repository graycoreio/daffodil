import { NgModule } from '@angular/core';

import { provideDaffCartStoreCreditStateTesting } from './provider';

/**
 * Provides the {@link MockDaffCartStoreCreditPageFacade} for {@link DaffCartStoreCreditPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffCartStoreCreditStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCartStoreCreditStateTesting(),
  ],
})
export class DaffCartStoreCreditStateTestingModule {}
