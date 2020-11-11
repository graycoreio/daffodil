import { Injectable } from '@angular/core';

import { DaffCart } from '@daffodil/cart';

import { DaffMagentoCartPaymentTransformer } from './cart-payment.service';
import { DaffMagentoCartShippingInformationTransformer } from './cart-shipping-information.service';
import { DaffMagentoShippingAddressTransformer } from './shipping-address.service';
import { DaffMagentoBillingAddressTransformer } from './billing-address.service';
import { MagentoCart } from '../../models/responses/cart';
import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';
import { daffMagentoCouponTransform } from './cart-coupon';
import { transformMagentoCartItem } from './cart-item/cart-item-transformer';
import { transformCartTotals } from './cart-totals-transformer';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartTransformer {
  constructor(
    public shippingAddressTransformer: DaffMagentoShippingAddressTransformer,
    public billingAddressTransformer: DaffMagentoBillingAddressTransformer,
    public paymentTransformer: DaffMagentoCartPaymentTransformer,
    public shippingInformationTransformer: DaffMagentoCartShippingInformationTransformer,
    public shippingRateTransformer: DaffMagentoCartShippingRateTransformer
  ) {}

  private transformShippingAddress(cart: MagentoCart): {shipping_address: DaffCart['shipping_address']} {
    return {
      shipping_address: cart.shipping_addresses[0]
        ? this.shippingAddressTransformer.transform({
          ...cart.shipping_addresses[0],
          email: cart.email
        })
        : null
    }
  }

  private transformBillingAddress(cart: MagentoCart): {billing_address: DaffCart['billing_address']} {
    return {
      billing_address: cart.billing_address
        ? this.billingAddressTransformer.transform({
          ...cart.billing_address,
          email: cart.email
        })
        : null
    }
  }

  private transformCartItems(cart: MagentoCart): {items: DaffCart['items']} {
    return {
      items: cart.items.map(transformMagentoCartItem),
    }
  }

  private transformTotals(cart: MagentoCart): {
    grand_total: DaffCart['grand_total'],
    subtotal: DaffCart['subtotal'],
  } {
    return {
      grand_total: cart.prices.grand_total.value,
      subtotal: cart.prices.subtotal_excluding_tax.value,
    }
  }

  private transformCoupons(cart: MagentoCart): {coupons: DaffCart['coupons']} {
    return {
      coupons: cart.applied_coupons
        ? cart.applied_coupons.map(daffMagentoCouponTransform)
        : []
    }
  }

  private transformPayment(cart: MagentoCart): {payment: DaffCart['payment']} {
    return {
      payment: this.paymentTransformer.transform(cart.selected_payment_method),
    }
  }

  private transformShippingInformation(cart: MagentoCart): {shipping_information: DaffCart['shipping_information']} {
    return {
      shipping_information: cart.shipping_addresses[0]
        ? this.shippingInformationTransformer.transform(cart.shipping_addresses[0].selected_shipping_method)
        : null
    }
  }

  private transformShippingMethods(cart: MagentoCart): {available_shipping_methods: DaffCart['available_shipping_methods']} {
		return {
      available_shipping_methods: cart.shipping_addresses[0] && cart.shipping_addresses[0].available_shipping_methods
        ? cart.shipping_addresses[0].available_shipping_methods.map(method =>
          this.shippingRateTransformer.transform(method)
        )
        : []
    }
  }

  private transformPaymentMethods(cart: MagentoCart): {available_payment_methods: DaffCart['available_payment_methods']} {
    return {
      available_payment_methods: cart.available_payment_methods.map(method =>
        this.paymentTransformer.transform(method)
      )
    }
  }

  /**
   * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
   * @param cart the cart from a magento cart query.
   */
  transform(cart: MagentoCart): DaffCart {
    return cart ? {
      // add the magento cart in this way to avoid 'object literal may only specify known proerties'
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

      id: cart.id
    } : null
  }
}
