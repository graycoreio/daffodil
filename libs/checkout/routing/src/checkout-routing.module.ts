import { NgModule } from '@angular/core';

import { provideDaffCheckoutRouting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCheckoutRouting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCheckoutRouting(),
  ],
})
export class DaffCheckoutRoutingModule {}
