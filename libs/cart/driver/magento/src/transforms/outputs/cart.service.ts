import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';

import {
  DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS,
  DAFF_CART_MAGENTO_CART_TRANSFORMS,
} from '../../injection-tokens/public_api';
import {
  DaffCartMagentoCartItemTransform,
  DaffCartMagentoCartTransform,
} from '../../interfaces/public_api';
import { MagentoCart } from '../../models/responses/cart';
import { DaffMagentoBillingAddressTransformer } from './billing-address.service';
import { daffMagentoCouponTransform } from './cart-coupon';
import {
  daffTransformMagentoCartItem,
  transformMagentoCartItem,
} from './cart-item/cart-item-transformer';
import { DaffMagentoCartPaymentTransformer } from './cart-payment.service';
import { DaffMagentoCartShippingInformationTransformer } from './cart-shipping-information.service';
import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';
import { transformCartTotals } from './cart-totals-transformer';
import { DaffMagentoShippingAddressTransformer } from './shipping-address.service';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartTransformer {
  constructor(
    private shippingAddressTransformer: DaffMagentoShippingAddressTransformer,
    private billingAddressTransformer: DaffMagentoBillingAddressTransformer,
    private paymentTransformer: DaffMagentoCartPaymentTransformer,
    private shippingInformationTransformer: DaffMagentoCartShippingInformationTransformer,
    private shippingRateTransformer: DaffMagentoCartShippingRateTransformer,
    @Inject(DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS) private cartItemTransforms: DaffCartMagentoCartItemTransform[],
    @Inject(DAFF_CART_MAGENTO_CART_TRANSFORMS) private cartTransforms: DaffCartMagentoCartTransform[],
  ) {}

  private transformShippingAddress(cart: MagentoCart): {shipping_address: DaffCart['shipping_address']} {
    return {
      shipping_address: cart.shipping_addresses[0]
        ? this.shippingAddressTransformer.transform({
          ...cart.shipping_addresses[0],
          email: cart.email,
        })
        : null,
    };
  }

  private transformBillingAddress(cart: MagentoCart): {billing_address: DaffCart['billing_address']} {
    return {
      billing_address: cart.billing_address
        ? this.billingAddressTransformer.transform({
          ...cart.billing_address,
          email: cart.email,
        })
        : null,
    };
  }

  private transformCartItems(cart: MagentoCart): {items: DaffCart['items']} {
    return {
      // TODO: extract into own transforms
      items: cart.items.filter(item => !!item).map(item => transformMagentoCartItem(daffTransformMagentoCartItem(item), item, this.cartItemTransforms)),
    };
  }

  private transformTotals(cart: MagentoCart): {
    grand_total: DaffCart['grand_total'];
    subtotal: DaffCart['subtotal'];
  } {
    return {
      grand_total: cart.prices.grand_total.value,
      subtotal: cart.prices.subtotal_excluding_tax.value,
    };
  }

  private transformCoupons(cart: MagentoCart): {coupons: DaffCart['coupons']} {
    return {
      coupons: cart.applied_coupons
        ? cart.applied_coupons.map(daffMagentoCouponTransform)
        : [],
    };
  }

  private transformPayment(cart: MagentoCart): {payment: DaffCart['payment']} {
    return {
      payment: this.paymentTransformer.transform(cart.selected_payment_method),
    };
  }

  private transformShippingInformation(cart: MagentoCart): {shipping_information: DaffCart['shipping_information']} {
    return {
      shipping_information: cart.shipping_addresses[0]
        ? this.shippingInformationTransformer.transform(cart.shipping_addresses[0].selected_shipping_method)
        : null,
    };
  }

  private transformShippingMethods(cart: MagentoCart): {available_shipping_methods: DaffCart['available_shipping_methods']} {
    return {
      available_shipping_methods: cart.shipping_addresses[0] && cart.shipping_addresses[0].available_shipping_methods
        ? cart.shipping_addresses[0].available_shipping_methods.map(method =>
          this.shippingRateTransformer.transform(method),
        )
        : [],
    };
  }

  private transformPaymentMethods(cart: MagentoCart): {available_payment_methods: DaffCart['available_payment_methods']} {
    return {
      available_payment_methods: cart.available_payment_methods.map(method =>
        this.paymentTransformer.transform(method),
      ),
    };
  }

  /**
   * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
   *
   * @param cart the cart from a magento cart query.
   */
  transform(cart: MagentoCart): DaffCart {
    return cart ? this.cartTransforms.reduce(
      (daffCart, transform) => transform(daffCart, cart),
      {
        extra_attributes: cart,

        ...this.transformCartItems(cart),
        ...this.transformBillingAddress(cart),
        ...this.transformShippingAddress(cart),
        ...this.transformCoupons(cart),
        ...this.transformPayment(cart),
        ...this.transformTotals(cart),
        ...transformCartTotals(cart),
        ...this.transformShippingInformation(cart),
        ...this.transformShippingMethods(cart),
        ...this.transformPaymentMethods(cart),

        id: cart.id,
      },
    ) : null;
  }
}
