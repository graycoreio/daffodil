import { gql } from 'apollo-angular';

import { magentoMoneyFragment } from '@daffodil/driver/magento';

export const pricesFragment = gql`
  fragment prices on CartPrices {
		grand_total {
			...moneyFragment
		}
		subtotal_excluding_tax {
			...moneyFragment
		}
		subtotal_including_tax {
			...moneyFragment
		}
		subtotal_with_discount_excluding_tax {
			...moneyFragment
		}
		applied_taxes {
			amount {
				...moneyFragment
			}
			label
		}
		discounts {
			amount {
				...moneyFragment
			}
			label
		}
	}
  ${magentoMoneyFragment}
`;
