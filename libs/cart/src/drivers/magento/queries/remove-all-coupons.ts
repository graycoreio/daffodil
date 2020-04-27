import gql from 'graphql-tag';

import { cartItemFragment } from './fragments/cart-item';
import { pricesFragment } from './fragments/prices';

export const removeAllCoupons = gql`
  mutation RemoveAllCoupons($cartId: String!) {
    mutation {
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
					applied_coupons {
						code
					}
					prices {
						...prices
					}
				}
			}
    }
  }
  ${cartItemFragment}
  ${pricesFragment}
`;
