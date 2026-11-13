import { NgModule } from '@angular/core';

import { provideDaffProductStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffProductStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffProductStateTesting(),
  ],
})
export class DaffProductStateTestingModule { }
