import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffCustomerOrderMagentoService } from './order.service';
import { MagentoCustomerOrderCollectionTransformer } from './transforms/public_api';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerOrderMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerOrderMagentoDriverModule> {
    return {
      ngModule: DaffCustomerOrderMagentoDriverModule,
      providers: [
        MagentoCustomerOrderCollectionTransformer,
        provideDaffOrderDriver(DaffCustomerOrderMagentoService),
      ],
    };
  }
}
