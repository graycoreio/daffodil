import { NgModule } from '@angular/core';

import { provideDaffSearchStateTesting } from './provider';

/**
 * Provides the {@link MockDaffSearchFacade} for {@link DaffSearchFacade}.
 *
 * @deprecated in favor of {@link provideDaffSearchStateTesting}
 */
@NgModule({
  providers: [
    provideDaffSearchStateTesting(),
  ],
})
export class DaffSearchStateTestingModule {}
