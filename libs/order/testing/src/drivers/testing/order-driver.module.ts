import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffOrderDriver } from '@daffodil/order';

import { DaffTestingOrderService } from './order.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffOrderTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderTestingDriverModule> {
    return {
      ngModule: DaffOrderTestingDriverModule,
      providers: [
        {
          provide: DaffOrderDriver,
          useExisting: DaffTestingOrderService
        }
      ]
    };
  }
}
