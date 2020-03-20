import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffCartDriver,
  DaffCartItemDriver,
} from '@daffodil/cart';

import { DaffInMemoryCartService } from './cart/cart.service';
import { DaffInMemoryCartItemService } from './cart-item/cart-item.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCartInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffCartInMemoryDriverModule,
      providers: [
        {
          provide: DaffCartDriver,
          useExisting: DaffInMemoryCartService
        },
        {
          provide: DaffCartItemDriver,
          useExisting: DaffInMemoryCartItemService
        }
      ]
    };
  }
}
