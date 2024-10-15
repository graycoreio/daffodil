import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffInMemoryOrderService } from './order.service';
import { DaffInMemoryBackendOrderService } from '../backend/order.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffOrderInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderInMemoryDriverModule> {
    return {
      ngModule: DaffOrderInMemoryDriverModule,
      providers: [
        provideDaffOrderDriver(DaffInMemoryOrderService),
        provideDaffInMemoryBackends(DaffInMemoryBackendOrderService),
      ],
    };
  }
}
