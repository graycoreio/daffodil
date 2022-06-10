import { gql } from 'apollo-angular';

export const magentoProductSearchResultFragment = gql`
  fragment magentoProductSearchResult on ProductInterface {
    __typename
		url_key
    url_suffix
		name
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
    thumbnail {
			url
			label
		}
    short_description {
			html
		}
  }
`;
