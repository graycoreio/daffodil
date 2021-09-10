import { gql } from 'apollo-angular';

export const magentoBundledProductFragment = gql`
fragment magentoBundledProduct on BundleProduct {
	items {
		option_id
		required
		title
		type
		options {
			uid
			is_default
			label
			quantity
			product {
				stock_status
				price_range {
					maximum_price {
						regular_price {
							value
							currency
						}
						discount {
							amount_off
							percent_off
						}
					}
				}
			}
		}
	}
}
`;
