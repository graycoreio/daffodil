import { NgModule } from '@angular/core';

import { provideDaffProductStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffProductStateTesting}
 */
@NgModule({
  providers: [
    provideDaffProductStateTesting(),
  ],
})
export class DaffProductStateTestingModule { }
