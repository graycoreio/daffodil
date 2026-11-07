import { NgModule } from '@angular/core';

import { provideDaffProductConfigurableStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffProductConfigurableStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffProductConfigurableStateTesting(),
  ],
})
export class DaffConfigurableProductStateTestingModule { }
