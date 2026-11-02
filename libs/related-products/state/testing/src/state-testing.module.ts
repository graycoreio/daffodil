import { NgModule } from '@angular/core';

import { provideDaffRelatedProductsStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffRelatedProductsStateTesting}
 */
@NgModule({
  providers: [
    provideDaffRelatedProductsStateTesting(),
  ],
})
export class DaffRelatedProductsStateTestingModule {}
