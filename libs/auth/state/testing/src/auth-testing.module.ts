import { NgModule } from '@angular/core';

import { provideDaffAuthStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffAuthStateTesting(),
  ],
})
export class DaffAuthStateTestingModule {}
