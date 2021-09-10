import { gql } from 'apollo-angular';

export const magentoBundledProductFragment = gql`
  fragment magentoBundledProduct on BundleProduct {
		items {
			option_id
			position
			required
			sku
			title
			type
			options {
				can_change_quantity
				uid
				is_default
				label
				position
				price_type
				price
				quantity
				product {
					uid
					name
					sku
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
