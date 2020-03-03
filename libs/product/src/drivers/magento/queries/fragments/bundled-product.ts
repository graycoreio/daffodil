import gql from 'graphql-tag';

export const bundledProductFragment = gql`
  fragment BundledProduct on Product {
		dynamic_price
		dynamic_sku
		dynamic_weight
		price_view
		ship_bundle_items
		items {
			option_id
			position
			required
			sku
			title
			type
			options {
				can_change_quantity
				id
				is_default
				label
				position
				price_type
				price
				quantity
				product {
					id
					name
					sku
				}
			}
		}
  }
`;
