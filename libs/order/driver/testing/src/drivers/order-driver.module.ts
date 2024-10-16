import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffTestingOrderService } from './order.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffOrderTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderTestingDriverModule> {
    return {
      ngModule: DaffOrderTestingDriverModule,
      providers: [
        provideDaffOrderDriver(DaffTestingOrderService),
      ],
    };
  }
}
