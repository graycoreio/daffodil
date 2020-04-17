import gql from 'graphql-tag';

import { cartItemFragment } from './fragments/cart-item';
import { moneyFragment } from './fragments/money';

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
						grand_total {
							...money
						}
						subtotal_excluding_tax {
							...money
						}
						subtotal_including_tax {
							...money
						}
						subtotal_with_discount_excluding_tax {
							...money
						}
					}
				}
			}
    }
  }
  ${cartItemFragment}
  ${moneyFragment}
`;
