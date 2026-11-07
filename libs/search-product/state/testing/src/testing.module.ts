import { NgModule } from '@angular/core';

import { provideDaffSearchProductStateTesting } from './provider';

/**
 * Provides the {@link MockDaffSearchProductFacade} for {@link DaffSearchProductFacade}.
 *
 * @deprecated in favor of {@link provideDaffSearchProductStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffSearchProductStateTesting(),
  ],
})
export class DaffSearchProductStateTestingModule {}
