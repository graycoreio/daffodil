import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffPaypalDriver } from '@daffodil/paypal';

import { DaffInMemoryPaypalService } from './paypal.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffPaypalInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffPaypalInMemoryDriverModule,
      providers: [
        {
          provide: DaffPaypalDriver,
          useExisting: DaffInMemoryPaypalService
        }
      ]
    };
  }
}
