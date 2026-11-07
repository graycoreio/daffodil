import { NgModule } from '@angular/core';

import { provideDaffOrderStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffOrderStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffOrderStateTesting(),
  ],
})
export class DaffOrderStateTestingModule {}
