import gql from 'graphql-tag';

import { magentoProductFragment } from '@daffodil/product';

import { moneyFragment } from './money';

export const cartItemFragment = gql`
  fragment cartItem on CartItemInterface {
		__typename
    id
    product {
      ...product
    }
    quantity
    prices {
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
		...on ConfigurableCartItem {
			configurable_options {
				option_label
				value_label
			}
		}
		...on BundleCartItem {
			bundle_options {
				id
				label
				type
				values {
					id
					label
					price
					quantity
				}
			}
		}
  }
  ${magentoProductFragment}
  ${moneyFragment}
`;
