import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductDriver } from '@daffodil/product/driver';

import { DaffShopifyProductService } from './product.service';

/**
 * A module that provides the {@link DaffProductDriver} as the {@link DaffShopifyProductService}.
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
        provideDaffProductDriver(DaffShopifyProductService),
      ],
    };
  }
}
