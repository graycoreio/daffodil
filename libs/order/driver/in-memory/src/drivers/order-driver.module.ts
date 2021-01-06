import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffOrderDriver,
} from '@daffodil/order/driver';

import { DaffInMemoryOrderService } from './order.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffOrderInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderInMemoryDriverModule> {
    return {
      ngModule: DaffOrderInMemoryDriverModule,
      providers: [
        {
          provide: DaffOrderDriver,
          useExisting: DaffInMemoryOrderService
        },
      ]
    };
  }
}
