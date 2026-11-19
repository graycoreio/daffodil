import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffUpsellProductsInMemoryDriver } from './provider';

/**
 * Module for providing the upsell product fields to the product extension factory.
 *
 * @deprecated in favor of {@link provideDaffUpsellProductsInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffUpsellProductsInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffUpsellProductsInMemoryDriverModule> {
    return {
      ngModule: DaffUpsellProductsInMemoryDriverModule,
      providers: [
        provideDaffUpsellProductsInMemoryDriver(),
      ],
    };
  }
}
