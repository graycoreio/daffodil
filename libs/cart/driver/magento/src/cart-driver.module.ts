import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffCartDriver,
  provideDaffCartItemDriver,
  provideDaffCartAddressDriver,
  provideDaffCartBillingAddressDriver,
  provideDaffCartShippingAddressDriver,
  provideDaffCartShippingMethodsDriver,
  provideDaffCartShippingInformationDriver,
  provideDaffCartPaymentDriver,
  provideDaffCartPaymentMethodsDriver,
  provideDaffCartOrderDriver,
  provideDaffCartCouponDriver,
  daffCartDriverProvideFreePaymentMethod,
} from '@daffodil/cart/driver';

import { DaffMagentoCartAddressService } from './cart-address.service';
import { DaffMagentoCartBillingAddressService } from './cart-billing-address.service';
import { DaffMagentoCartCouponService } from './cart-coupon.service';
import { DaffMagentoCartItemService } from './cart-item.service';
import { DaffMagentoCartOrderService } from './cart-order.service';
import { DaffMagentoCartPaymentMethodsService } from './cart-payment-methods.service';
import { DaffMagentoCartPaymentService } from './cart-payment.service';
import { DaffMagentoCartShippingAddressService } from './cart-shipping-address.service';
import { DaffMagentoCartShippingInformationService } from './cart-shipping-information.service';
import { DaffMagentoCartShippingMethodsService } from './cart-shipping-methods.service';
import { DaffMagentoCartService } from './cart.service';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { DaffMagentoCartAddressInputTransformer } from './transforms/inputs/cart-address.service';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';
import { DaffMagentoCartAddressTransformer } from './transforms/outputs/cart-address.service';
import { DaffMagentoCartCouponResponseTransformer } from './transforms/outputs/cart-coupon-response.service';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartMagentoDriverModule> {
    return {
      ngModule: DaffCartMagentoDriverModule,
      providers: [
        provideDaffCartDriver(DaffMagentoCartService),
        provideDaffCartItemDriver(DaffMagentoCartItemService),
        provideDaffCartAddressDriver(DaffMagentoCartAddressService),
        provideDaffCartBillingAddressDriver(DaffMagentoCartBillingAddressService),
        provideDaffCartShippingAddressDriver(DaffMagentoCartShippingAddressService),
        provideDaffCartShippingMethodsDriver(DaffMagentoCartShippingMethodsService),
        provideDaffCartShippingInformationDriver(DaffMagentoCartShippingInformationService),
        provideDaffCartPaymentDriver(DaffMagentoCartPaymentService),
        provideDaffCartPaymentMethodsDriver(DaffMagentoCartPaymentMethodsService),
        provideDaffCartOrderDriver(DaffMagentoCartOrderService),
        provideDaffCartCouponDriver(DaffMagentoCartCouponService),

        // output transformers
        DaffMagentoBillingAddressTransformer,
        DaffMagentoCartAddressTransformer,
        DaffMagentoCartPaymentTransformer,
        DaffMagentoCartShippingRateTransformer,
        DaffMagentoCartTransformer,
        DaffMagentoShippingAddressTransformer,
        DaffMagentoCartCouponResponseTransformer,

        // input transformers
        DaffMagentoCartAddressInputTransformer,
        DaffMagentoShippingAddressInputTransformer,
        DaffMagentoBillingAddressInputTransformer,
        DaffMagentoCartItemUpdateInputTransformer,
        DaffMagentoPaymentMethodInputTransformer,
        DaffMagentoShippingMethodInputTransformer,

        daffCartDriverProvideFreePaymentMethod({
          method: 'free',
          payment_info: {
            code: 'free',
          },
        }),
      ],
    };
  }
}
