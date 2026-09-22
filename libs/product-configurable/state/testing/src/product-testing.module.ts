import { NgModule } from '@angular/core';

import { provideDaffProductConfigurableStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffProductConfigurableStateTesting}
 */
@NgModule({
  providers: [
    provideDaffProductConfigurableStateTesting(),
  ],
})
export class DaffConfigurableProductStateTestingModule { }
