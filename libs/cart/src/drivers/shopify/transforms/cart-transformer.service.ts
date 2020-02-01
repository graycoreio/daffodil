import { Injectable, Inject } from '@angular/core';

import { DaffCart } from '../../../models/cart';
import { DaffCartItem } from '../../../models/cart-item';
import { DaffCartTransformerInterface } from '../../interfaces/cart-transformer.interface';
import { DaffCartItemTransformerInterface } from '../../interfaces/cart-item-transformer.interface';
import { DaffCartAddressTransformerInterface } from '../../interfaces/cart-address-transformer.interface';
import { Cart as ShopifyCart } from '../models/cart';
import { DaffCartAddress } from '../../../models/cart-address';
import { DaffCartItemTransformer } from '../../injection-tokens/cart-item-transformer.token';
import { DaffCartAddressTransformer } from '../../injection-tokens/cart-address-transformer.token';

/**
 * Transforms shopify carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffShopifyCartTransformerService implements DaffCartTransformerInterface<DaffCart> {
  constructor(
    @Inject(DaffCartItemTransformer) public itemTransformer: DaffCartItemTransformerInterface<DaffCartItem>,
    @Inject(DaffCartAddressTransformer) public addressTransformer: DaffCartAddressTransformerInterface< DaffCartAddress>
  ) {}

  /**
   * Transforms the shopify Cart from the shopify cart query into a DaffCart.
   * @param cart the cart from a shopify cart query.
   */
  transform(cart: ShopifyCart): DaffCart {
    return {
      // base
      id: Number(cart.id),
      created_at: new Date(cart.createdAt),
      updated_at: new Date(cart.updatedAt),
      customer_id: Number(cart.customer_id),
      items: cart.lineItems.edges.map(({node}) =>
        this.itemTransformer.transform(node)
      ),
      // don't use `customer.addresses` because some fields are not available
      addresses: [
        this.addressTransformer.transform({
          ...cart.shippingAddress,
          // set type manually; shopify does not include the field
          type: 'shipping',
        }),
        // this.addressTransformer.transform({
          //   ...cart.billing_address,
          //   // set type manually; shopify does not include the field
          //   type: 'billing',
          // }),
      ],
      subtotal: cart.lineItemsSubtotalPrice.amount,
      subtotal_with_discount: cart.subtotalPriceV2.amount,

      // TODO: implement
      checkout_method: '',
      grand_total: 0,
      coupon_code: '',
      store_to_base_rate: 0,
      payment: null,
    }
  }
}
