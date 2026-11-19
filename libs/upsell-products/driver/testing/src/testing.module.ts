import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffUpsellProductsTestingDriver } from './provider';

/**
 * Module for providing the upsell product fields to the product extension factory.
 *
 * @deprecated in favor of {@link provideDaffUpsellProductsTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffUpsellProductsTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffUpsellProductsTestingDriverModule> {
    return {
      ngModule: DaffUpsellProductsTestingDriverModule,
      providers: [
        provideDaffUpsellProductsTestingDriver(),
      ],
    };
  }
}
