import { NgModule } from '@angular/core';

import { provideDaffProductCompositeStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffProductCompositeStateTesting}
 */
@NgModule({
  providers: [
    provideDaffProductCompositeStateTesting(),
  ],
})
export class DaffCompositeProductStateTestingModule { }
