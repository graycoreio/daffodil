import { NgModule } from '@angular/core';

import { provideDaffSearchRouting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffSearchRouting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffSearchRouting(),
  ],
})
export class DaffSearchRoutingModule {}
