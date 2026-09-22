import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffRelatedProductsInMemoryDriver } from './provider';

/**
 * Module for providing the related product fields to the product extension factory.
 *
 * @deprecated in favor of {@link provideDaffRelatedProductsInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffRelatedProductsInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffRelatedProductsInMemoryDriverModule> {
    return {
      ngModule: DaffRelatedProductsInMemoryDriverModule,
      providers: [
        provideDaffRelatedProductsInMemoryDriver(),
      ],
    };
  }
}
