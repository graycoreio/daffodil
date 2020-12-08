import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { cartItemFragment } from './fragments/cart-item';
import { pricesFragment } from './fragments/prices';
import { cartCouponFragment, selectedShippingMethodFragment } from './fragments/public_api';

export const applyCoupon = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation ApplyCoupon($cartId: String!, $couponCode: String!) {
    applyCouponToCart(
      input: {
        cart_id: $cartId,
        coupon_code: $couponCode
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
