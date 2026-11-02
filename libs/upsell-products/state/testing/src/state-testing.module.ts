import { NgModule } from '@angular/core';

import { provideDaffUpsellProductsStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffUpsellProductsStateTesting}
 */
@NgModule({
  providers: [
    provideDaffUpsellProductsStateTesting(),
  ],
})
export class DaffUpsellProductsStateTestingModule {}
