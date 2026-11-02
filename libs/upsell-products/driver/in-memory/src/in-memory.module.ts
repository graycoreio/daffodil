import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffUpsellProductsInMemoryDriver } from './provider';

/**
 * Module for providing the upsell product fields to the product extension factory.
 *
 * @deprecated in favor of {@link provideDaffUpsellProductsInMemoryDriver}
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
