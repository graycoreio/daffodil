import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffUpsellProductsTestingDriver } from './provider';

/**
 * Module for providing the upsell product fields to the product extension factory.
 *
 * @deprecated in favor of {@link provideDaffUpsellProductsTestingDriver}
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
