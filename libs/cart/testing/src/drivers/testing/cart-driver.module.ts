import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffTestingCartService } from './cart.service';
import { DaffCartDriver } from '../../../../src/drivers/injection-tokens/cart-driver.token';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffTestingCartDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffTestingCartDriverModule,
      providers: [
        {
          provide: DaffCartDriver,
          useExisting: DaffTestingCartService
        }
      ]
    };
  }
}
