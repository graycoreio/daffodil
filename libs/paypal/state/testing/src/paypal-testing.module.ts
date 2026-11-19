import { NgModule } from '@angular/core';

import { provideDaffPaypalStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffPaypalStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffPaypalStateTesting(),
  ],
})
export class DaffPaypalStateTestingModule { }
