import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';


import { provideDaffProductShopifyDriver } from './provider';

/**
 * A module that provides the {@link DaffProductDriver} as the {@link DaffShopifyProductService}.
 *
 * @deprecated Use {@link provideDaffProductShopifyDriver} instead.
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
