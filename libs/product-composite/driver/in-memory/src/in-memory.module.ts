import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductCompositeInMemoryDriver } from './provider';

/**
 * Module for providing the composite product factory to the product kind factory.
 *
 * @deprecated in favor of {@link provideDaffProductCompositeInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCompositeProductInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCompositeProductInMemoryDriverModule> {
    return {
      ngModule: DaffCompositeProductInMemoryDriverModule,
      providers: [
        provideDaffProductCompositeInMemoryDriver(),
      ],
    };
  }
}
