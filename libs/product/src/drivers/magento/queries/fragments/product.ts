import gql from 'graphql-tag';

export const magentoProductFragment = gql`
  fragment product on ProductInterface {
		id
		url_key
		name
		sku
		price {
			regularPrice {
				amount {
					value
					currency
				}
			}
		}
		image {
			url
			label
		}
		media_gallery_entries {
			label
			file
			position
			disabled
			id
		}
		short_description {
			html
		}
		description {
			html
		}
  }
`;
