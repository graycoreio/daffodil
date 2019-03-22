import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCheckoutDriver } from '@daffodil/checkout';

import { DaffTestingCheckoutService } from './checkout.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCheckoutTestingDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffCheckoutTestingDriverModule,
      providers: [
        {
          provide: DaffCheckoutDriver,
          useExisting: DaffTestingCheckoutService
        }
      ]
    };
  }
}
