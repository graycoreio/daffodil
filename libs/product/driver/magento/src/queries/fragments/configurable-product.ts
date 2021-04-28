import { gql } from 'apollo-angular';


export const magentoConfigurableProductFragment = gql`
  fragment magentoConfigurableProduct on ConfigurableProduct {
		configurable_options {
			attribute_code
			attribute_id
			uid
			label
			position
			product_id
			values {
				label
				value_index
			}
		}
		variants {
			attributes {
				code
				label
				value_index
			}
			product {
				sku
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
				stock_status
				image {
					url
					label
				}
			}
		}
  }
`;
