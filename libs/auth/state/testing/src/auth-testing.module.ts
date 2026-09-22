import { NgModule } from '@angular/core';

import { provideDaffAuthStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthStateTesting}
 */
@NgModule({
  providers: [
    provideDaffAuthStateTesting(),
  ],
})
export class DaffAuthStateTestingModule {}
