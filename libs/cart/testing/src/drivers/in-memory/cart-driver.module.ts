import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffCartDriver,
} from '@daffodil/cart';

import { DaffInMemoryCartService } from './cart/cart.service';

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
        }
      ]
    };
  }
}
