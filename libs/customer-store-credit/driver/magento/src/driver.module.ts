import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  daffProvideCustomerOrderMagentoExtraOrderFragments,
  daffProvideCustomerOrderMagentoExtraOrderTransforms,
} from '@daffodil/customer-order/driver/magento';
import { DaffCustomerStoreCreditDriver } from '@daffodil/customer-store-credit/driver';

import { DaffCustomerStoreCreditMagentoService } from './customer-store-credit.service';
import { magentoCustomerOrderStoreCreditTotalFragment } from './queries/public_api';
import { magentoCustomerOrderWithStoreCreditTransform } from './transforms/public_api';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerStoreCreditMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerStoreCreditMagentoDriverModule> {
    return {
      ngModule: DaffCustomerStoreCreditMagentoDriverModule,
      providers: [
        {
          provide: DaffCustomerStoreCreditDriver,
          useExisting: DaffCustomerStoreCreditMagentoService,
        },
        daffProvideCustomerOrderMagentoExtraOrderFragments(
          magentoCustomerOrderStoreCreditTotalFragment,
        ),
        daffProvideCustomerOrderMagentoExtraOrderTransforms(
          magentoCustomerOrderWithStoreCreditTransform,
        ),
      ],
    };
  }
}
