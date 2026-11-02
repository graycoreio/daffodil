import { NgModule } from '@angular/core';

import { provideDaffCheckoutRouting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCheckoutRouting}
 */
@NgModule({
  providers: [
    provideDaffCheckoutRouting(),
  ],
})
export class DaffCheckoutRoutingModule {}
