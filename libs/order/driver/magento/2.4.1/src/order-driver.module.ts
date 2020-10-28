import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffOrderDriver } from '@daffodil/order/driver';

import { DaffOrderMagentoService } from './order.service';
import { DaffMagentoExtraOrderFragments } from './injection-tokens/public_api';
import { daffMagentoNoopOrderFragment } from './queries/public_api';

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
        },
        {
          provide: DaffMagentoExtraOrderFragments,
          useValue: daffMagentoNoopOrderFragment,
          multi: true
        }
      ]
    };
  }
}
