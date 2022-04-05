import { gql } from 'apollo-angular';

import { moneyFragment } from './money';

export const cartItemProductFragment = gql`
  fragment cartItemProduct on ProductInterface {
    id
		name
    sku
    url_key
    url_suffix
    thumbnail {
      label
      url
    }
    stock_status
  }
`;

export const cartItemFragment = gql`
  fragment cartItem on CartItemInterface {
		__typename
    id
    product {
      ...cartItemProduct
    }
    quantity
    prices {
      price {
        ...money
      }
      row_total {
        ...money
      }
      discounts {
        amount {
          ...money
        }
        label
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
  ${cartItemProductFragment}
  ${moneyFragment}
`;
