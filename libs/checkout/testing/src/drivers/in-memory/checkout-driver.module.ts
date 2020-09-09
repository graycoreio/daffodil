import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCheckoutDriver } from '@daffodil/checkout';

import { DaffInMemoryCheckoutService } from './checkout.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCheckoutInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCheckoutInMemoryDriverModule> {
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
