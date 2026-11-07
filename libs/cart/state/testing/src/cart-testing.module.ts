import { NgModule } from '@angular/core';

import { provideDaffCartStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCartStateTesting(),
  ],
})
export class DaffCartStateTestingModule { }
