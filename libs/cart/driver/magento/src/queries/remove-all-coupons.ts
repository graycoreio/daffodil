import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { cartItemFragment } from './fragments/cart-item';
import { pricesFragment } from './fragments/prices';
import { cartCouponFragment, selectedShippingMethodFragment } from './fragments/public_api';

export const removeAllCoupons = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation RemoveAllCoupons($cartId: String!) {
    removeCouponFromCart(
      input: {
        cart_id: $cartId
      }
    ) {
      cart {
        id
        items {
          ...cartItem
        }
				shipping_addresses {
					... on ShippingCartAddress {
						selected_shipping_method {
							...selectedShippingMethod
						}
					}
				}
        applied_coupons {
					...cartCoupon
        }
        prices {
          ...prices
        }
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartItemFragment}
  ${pricesFragment}
	${cartCouponFragment}
	${selectedShippingMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
