import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffProductDriver } from '@daffodil/product/driver';

import { DaffShopifyProductService } from './product.service';

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
        {
          provide: DaffProductDriver,
          useExisting: DaffShopifyProductService,
        },
      ],
    };
  }
}
