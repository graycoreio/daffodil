import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductCompositeMagentoDriver } from './provider';

/**
 * A module that provides the product fragment for composite products along with a composite product transformer.
 *
 * @deprecated in favor of {@link provideDaffProductCompositeMagentoDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCompositeProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCompositeProductMagentoDriverModule> {
    return {
      ngModule: DaffCompositeProductMagentoDriverModule,
      providers: [
        provideDaffProductCompositeMagentoDriver(),
      ],
    };
  }
}
