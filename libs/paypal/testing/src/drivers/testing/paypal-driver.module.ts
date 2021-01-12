import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffPaypalDriver } from '@daffodil/paypal';

import { DaffTestingPaypalService } from './paypal.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffPaypalTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaypalTestingDriverModule> {
    return {
      ngModule: DaffPaypalTestingDriverModule,
      providers: [
        {
          provide: DaffPaypalDriver,
          useExisting: DaffTestingPaypalService
        }
      ]
    };
  }
}
