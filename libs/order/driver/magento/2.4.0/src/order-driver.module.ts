import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffOrderDriver } from '@daffodil/order';

import { DaffOrderMagentoService } from './order.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class DaffOrderMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderMagentoDriverModule> {
    return {
      ngModule: DaffOrderMagentoDriverModule,
      providers: [
        {
          provide: DaffOrderDriver,
          useExisting: DaffOrderMagentoService
        }
      ]
    };
  }
}
