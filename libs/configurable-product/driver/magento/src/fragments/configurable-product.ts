import { gql } from 'apollo-angular';

export const magentoConfigurableProductFragment = gql`
  fragment magentoConfigurableProduct on ConfigurableProduct {
		configurable_options {
			attribute_code
			label
			position
			values {
				label
				value_index
			}
		}
		variants {
			attributes {
				code
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
