import { NgModule } from '@angular/core';

import { provideDaffSearchRouting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffSearchRouting}
 */
@NgModule({
  providers: [
    provideDaffSearchRouting(),
  ],
})
export class DaffSearchRoutingModule {}
