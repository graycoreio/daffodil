import { NgModule } from '@angular/core';

import { provideDaffSearchStateTesting } from './provider';

/**
 * Provides the {@link MockDaffSearchFacade} for {@link DaffSearchFacade}.
 *
 * @deprecated in favor of {@link provideDaffSearchStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffSearchStateTesting(),
  ],
})
export class DaffSearchStateTestingModule {}
