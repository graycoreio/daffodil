import { gql } from 'apollo-angular';


export const magentoProductPreviewFragment = gql`
  fragment magentoProductPreview on ProductInterface {
    __typename
		uid
		url_key
    url_suffix
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
    image {
			url
			label
		}
  }
`;
