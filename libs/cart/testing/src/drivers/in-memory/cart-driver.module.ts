import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffInMemoryCartService } from './cart.service';
import { DaffCartDriver } from '../../../../src/drivers/injection-tokens/cart-driver.token';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffInMemoryCartDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffInMemoryCartDriverModule,
      providers: [
        {
          provide: DaffCartDriver,
          useExisting: DaffInMemoryCartService
        }
      ]
    };
  }
}
