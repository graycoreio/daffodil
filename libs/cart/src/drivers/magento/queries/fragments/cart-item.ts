import gql from 'graphql-tag';

import { productFragment } from './product';
import { moneyFragment } from './money';

export const cartItemFragment = gql`
  fragment cartItem on CartItemInterface {
    id
    product {
      ...product
    }
    quantity
    prices {
      discounts
      price {
        ...money
      }
      row_total {
        ...money
      }
      row_total_including_tax {
        ...money
      }
      total_item_discount {
        ...money
      }
    }
  }
  ${productFragment}
  ${moneyFragment}
`;
