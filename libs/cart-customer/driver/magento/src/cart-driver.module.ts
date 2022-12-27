import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffCartAddressDriver,
  DaffCartBillingAddressDriver,
  DaffCartDriver,
  DaffCartShippingAddressDriver,
} from '@daffodil/cart/driver';

import { DaffMagentoCartCustomerAddressService } from './cart-address.service';
import { DaffMagentoCartCustomerBillingAddressService } from './cart-billing-address.service';
import { DaffMagentoCartCustomerShippingAddressService } from './cart-shipping-address.service';
import { DaffMagentoCartCustomerService } from './cart.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartCustomerMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartCustomerMagentoDriverModule> {
    return {
      ngModule: DaffCartCustomerMagentoDriverModule,
      providers: [
        {
          provide: DaffCartDriver,
          useExisting: DaffMagentoCartCustomerService,
        },
        {
          provide: DaffCartAddressDriver,
          useExisting: DaffMagentoCartCustomerAddressService,
        },
        {
          provide: DaffCartBillingAddressDriver,
          useExisting: DaffMagentoCartCustomerBillingAddressService,
        },
        {
          provide: DaffCartShippingAddressDriver,
          useExisting: DaffMagentoCartCustomerShippingAddressService,
        },
      ],
    };
  }
}
