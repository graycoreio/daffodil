import { NgModule } from '@angular/core';

import { provideDaffOrderStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffOrderStateTesting}
 */
@NgModule({
  providers: [
    provideDaffOrderStateTesting(),
  ],
})
export class DaffOrderStateTestingModule {}
