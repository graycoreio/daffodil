import { NgModule } from '@angular/core';

import { provideDaffCartStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartStateTesting}
 */
@NgModule({
  providers: [
    provideDaffCartStateTesting(),
  ],
})
export class DaffCartStateTestingModule { }
