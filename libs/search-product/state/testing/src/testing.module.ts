import { NgModule } from '@angular/core';

import { provideDaffSearchProductStateTesting } from './provider';

/**
 * Provides the {@link MockDaffSearchProductFacade} for {@link DaffSearchProductFacade}.
 *
 * @deprecated in favor of {@link provideDaffSearchProductStateTesting}
 */
@NgModule({
  providers: [
    provideDaffSearchProductStateTesting(),
  ],
})
export class DaffSearchProductStateTestingModule {}
