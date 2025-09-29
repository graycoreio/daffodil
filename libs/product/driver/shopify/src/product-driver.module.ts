import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';


import { provideDaffProductShopifyDriver } from './provider';

/**
 * A module that provides the {@link DaffProductDriver} as the {@link DaffShopifyProductService}.
 *
 * @deprecated Use {@link provideDaffProductShopifyDriver} instead. Deprecated in version 0.89.0. Will be removed in version 0.92.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffProductShopifyDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductShopifyDriverModule> {
    return {
      ngModule: DaffProductShopifyDriverModule,
      providers: [
        provideDaffProductShopifyDriver(),
      ],
    };
  }
}
