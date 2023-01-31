import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';
import { DaffOrderDriver } from '@daffodil/order/driver';

import { DaffCustomerOrderMagentoService } from './order.service';
import {
  MAGENTO_GET_CUSTOMER_ORDERS_QUERY_NAME,
  MAGENTO_GET_CUSTOMER_ORDER_QUERY_NAME,
} from './queries/public_api';

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
        {
          provide: DaffOrderDriver,
          useExisting: DaffCustomerOrderMagentoService,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: MAGENTO_GET_CUSTOMER_ORDER_QUERY_NAME,
          multi: true,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: MAGENTO_GET_CUSTOMER_ORDERS_QUERY_NAME,
          multi: true,
        },
      ],
    };
  }
}
