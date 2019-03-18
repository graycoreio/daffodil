import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCheckoutDriver } from '../../../../src/drivers/injection-tokens/driver-checkout.token';
import { DaffInMemoryCheckoutService } from './checkout.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCheckoutInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffCheckoutInMemoryDriverModule,
      providers: [
        {
          provide: DaffCheckoutDriver,
          useExisting: DaffInMemoryCheckoutService
        }
      ]
    };
  }
}
