import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffOrderMagentoService } from './order.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffOrderMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderMagentoDriverModule> {
    return {
      ngModule: DaffOrderMagentoDriverModule,
      providers: [
        provideDaffOrderDriver(DaffOrderMagentoService),
      ],
    };
  }
}
