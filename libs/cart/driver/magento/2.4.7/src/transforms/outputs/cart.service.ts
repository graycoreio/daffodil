import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';

import { DaffMagentoBillingAddressTransformer } from './billing-address.service';
import { daffMagentoCouponTransform } from './cart-coupon';
import {
  daffTransformMagentoCartItem,
  transformMagentoCartItem,
} from './cart-item/cart-item-transformer';
import { DaffMagentoCartPaymentTransformer } from './cart-payment.service';
import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';
import { transformCartTotals } from './cart-totals-transformer';
import { DaffMagentoShippingAddressTransformer } from './shipping-address.service';
import {
  DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS,
  DAFF_CART_MAGENTO_CART_TRANSFORMS,
} from '../../injection-tokens/public_api';
import {
  DaffCartMagentoCartItemTransform,
  DaffCartMagentoCartTransform,
} from '../../interfaces/public_api';
import { MagentoCart } from '../../models/responses/cart';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartTransformer<T extends MagentoCart = MagentoCart, V extends DaffCart = DaffCart> {
  constructor(
    private shippingAddressTransformer: DaffMagentoShippingAddressTransformer,
    private billingAddressTransformer: DaffMagentoBillingAddressTransformer,
    private paymentTransformer: DaffMagentoCartPaymentTransformer,
    private shippingRateTransformer: DaffMagentoCartShippingRateTransformer,
    @Inject(DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS) private cartItemTransforms: DaffCartMagentoCartItemTransform[],
    @Inject(DAFF_CART_MAGENTO_CART_TRANSFORMS) private cartTransforms: DaffCartMagentoCartTransform<T, V>[],
  ) {}

  private transformShippingAddress(cart: T): {shipping_address: V['shipping_address']} {
    return {
      shipping_address: cart.shipping_addresses[0]
        ? this.shippingAddressTransformer.transform({
          ...cart.shipping_addresses[0],
          email: cart.email,
        })
        : null,
    };
  }

  private transformBillingAddress(cart: T): {billing_address: V['billing_address']} {
    return {
      billing_address: cart.billing_address
        ? this.billingAddressTransformer.transform({
          ...cart.billing_address,
          email: cart.email,
        })
        : null,
    };
  }

  private transformCartItems(cart: T): {items: V['items']} {
    return {
      // TODO: extract into own transforms
      items: cart.items.filter(item => !!item).map(item => transformMagentoCartItem(daffTransformMagentoCartItem(item), item, this.cartItemTransforms)),
    };
  }

  private transformCoupons(cart: T): {coupons: V['coupons']} {
    return {
      coupons: cart.applied_coupons
        ? cart.applied_coupons.map(daffMagentoCouponTransform)
        : [],
    };
  }

  private transformPayment(cart: T): {payment: V['payment']} {
    return {
      payment: this.paymentTransformer.transform(cart.selected_payment_method),
    };
  }

  private transformShippingInformation(cart: T): {shipping_information: V['shipping_information']} {
    return {
      shipping_information: cart.shipping_addresses[0]
        ? this.shippingRateTransformer.transform(cart.shipping_addresses[0].selected_shipping_method)
        : null,
    };
  }

  private transformShippingMethods(cart: T): {available_shipping_methods: V['available_shipping_methods']} {
    return {
      available_shipping_methods: cart.shipping_addresses[0] && cart.shipping_addresses[0].available_shipping_methods
        ? cart.shipping_addresses[0].available_shipping_methods.map(method =>
          this.shippingRateTransformer.transform(method),
        )
        : [],
    };
  }

  private transformPaymentMethods(cart: T): {available_payment_methods: V['available_payment_methods']} {
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
  transform(cart: T): V {
    return cart ? this.cartTransforms.reduce(
      (daffCart, transform) => transform(daffCart, cart),
      <V>{
        extra_attributes: cart,

        ...this.transformCartItems(cart),
        ...this.transformBillingAddress(cart),
        ...this.transformShippingAddress(cart),
        ...this.transformCoupons(cart),
        ...this.transformPayment(cart),
        ...transformCartTotals(cart),
        ...this.transformShippingInformation(cart),
        ...this.transformShippingMethods(cart),
        ...this.transformPaymentMethods(cart),

        id: cart.id,
      },
    ) : null;
  }
}
