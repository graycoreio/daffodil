import { NgModule } from '@angular/core';

import { provideDaffProductCompositeStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffProductCompositeStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffProductCompositeStateTesting(),
  ],
})
export class DaffCompositeProductStateTestingModule { }
