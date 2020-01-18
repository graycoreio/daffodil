import { Injectable, Inject } from '@angular/core';

import { DaffCart } from '../../../models/cart';
import { DaffCartItem } from '../../../models/cart-item';
import { DaffCartTransformerInterface } from '../../interfaces/cart-transformer.interface';
import { DaffCartItemTransformerInterface } from '../../interfaces/cart-item-transformer.interface';
import { DaffCartAddressTransformerInterface } from '../../interfaces/cart-address-transformer.interface';
import { Cart as MagentoCart } from '../models/cart';
import { DaffCartAddress } from '../../../models/cart-address';
import { DaffCartItemTransformer } from '../../injection-tokens/cart-item-transformer.token';
import { DaffCartAddressTransformer } from '../../injection-tokens/cart-address-transformer.token';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartTransformerService implements DaffCartTransformerInterface<DaffCart> {
  constructor(
    @Inject(DaffCartItemTransformer) public itemTransformer: DaffCartItemTransformerInterface< DaffCartItem>,
    @Inject(DaffCartAddressTransformer) public addressTransformer: DaffCartAddressTransformerInterface< DaffCartAddress>
  ) {}

  /**
   * Transforms the magento Cart from the magento cart query into a DaffCart.
   * @param cart the cart from a magento cart query.
   */
  transform(cart: MagentoCart): DaffCart {
    return {
      // base
      id: cart.id,
      created_at: new Date(cart.created_at),
      updated_at: new Date(cart.updated_at),
      customer_id: cart.customer.id,
      store_to_base_rate: cart.currency.store_to_base_rate,
      items: cart.items.map(this.itemTransformer.transform),
      // don't use `customer.addresses` because some fields are not available
      addresses: [
        ...cart.extension_attributes.shipping_assignments.map(({shipping}) =>
          this.addressTransformer.transform({
            ...shipping,
            // set type manually; magento does not include the field
            type: 'shipping',
          })
        ),
        this.addressTransformer.transform({
          ...cart.billing_address,
          // set type manually; magento does not include the field
          type: 'billing',
        }),
      ],

      // totals
      grand_total: cart.grand_total,
      coupon_code: cart.coupon_code,
      subtotal: cart.subtotal,
      subtotal_with_discount: cart.subtotal_with_discount,

      // payment-method
      checkout_method: cart.method,

      // TODO: implement
      payment: null,
    }
  }
}
