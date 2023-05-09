import { gql } from 'apollo-angular';

import { magentoMoneyFragment } from '@daffodil/driver/magento';

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
        ...moneyFragment
      }
      row_total {
        ...moneyFragment
      }
      discounts {
        amount {
          ...moneyFragment
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
  ${magentoMoneyFragment}
`;
