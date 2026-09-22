import { NgModule } from '@angular/core';

import { provideDaffPaypalStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffPaypalStateTesting}
 */
@NgModule({
  providers: [
    provideDaffPaypalStateTesting(),
  ],
})
export class DaffPaypalStateTestingModule { }
