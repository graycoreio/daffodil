import { NgModule } from '@angular/core';

import { provideDaffUpsellProductsStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffUpsellProductsStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffUpsellProductsStateTesting(),
  ],
})
export class DaffUpsellProductsStateTestingModule {}
