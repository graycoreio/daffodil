import gql from 'graphql-tag';

export const magentoConfigurableProductFragment = gql`
  fragment magentoConfigurableProduct on ConfigurableProduct {
		items {
			configurable_options {
				attribute_code
				attribute_id
				id
				label
				position
				product_id
				values {
					label
					value_index
					swatch_data {
						value
						thumbnail
					}
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
						minimum_price {
							regular_price {
								value
								currency
							}
						}
					}
					image {
						url
						label
					}
				}
			}
		}
  }
`;
