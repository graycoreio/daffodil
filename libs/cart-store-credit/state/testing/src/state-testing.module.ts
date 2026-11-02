import { NgModule } from '@angular/core';

import { provideDaffCartStoreCreditStateTesting } from './provider';

/**
 * Provides the {@link MockDaffCartStoreCreditPageFacade} for {@link DaffCartStoreCreditPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffCartStoreCreditStateTesting}
 */
@NgModule({
  providers: [
    provideDaffCartStoreCreditStateTesting(),
  ],
})
export class DaffCartStoreCreditStateTestingModule {}
