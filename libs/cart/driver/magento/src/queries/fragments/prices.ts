import gql from 'graphql-tag';
import { moneyFragment } from './money';

export const pricesFragment = gql`
  fragment prices on CartPrices {
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
		applied_taxes {
			amount {
				...money
			}
			label
		}
		discounts {
			amount {
				...money
			}
			label
		}
	}
  ${moneyFragment}
`;
