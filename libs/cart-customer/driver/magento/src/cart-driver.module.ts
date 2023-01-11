import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffCartAddressDriver,
  DaffCartBillingAddressDriver,
  DaffCartDriver,
  DaffCartPaymentDriver,
  DaffCartShippingAddressDriver,
} from '@daffodil/cart/driver';

import { DaffMagentoCartCustomerAddressService } from './cart-address.service';
import { DaffMagentoCartCustomerBillingAddressService } from './cart-billing-address.service';
import { DaffMagentoCartCustomerShippingAddressService } from './cart-shipping-address.service';
import { DaffMagentoCartCustomerService } from './cart.service';
import { DaffMagentoCartCustomerPaymentService } from './payment.service';

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
        {
          provide: DaffCartPaymentDriver,
          useExisting: DaffMagentoCartCustomerPaymentService,
        },
      ],
    };
  }
}
