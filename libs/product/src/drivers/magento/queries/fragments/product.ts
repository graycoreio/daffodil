import gql from 'graphql-tag';
import { bundledProductFragment } from './bundled-product';
import { magentoSimpleProductFragment } from './simple-product';

export const magentoProductFragment = gql`
  fragment product on ProductInterface {
		__typename
		id
		url_key
		name
		sku
		price_range {
			maximum_price {
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
    thumbnail {
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
		...BundledProduct
		...magentoSimpleProduct
	}
	${bundledProductFragment}
	${magentoSimpleProductFragment}
`;
