import gql from 'graphql-tag';
import { magentoBundledProductFragment } from './bundled-product';
import { magentoSimpleProductFragment } from './simple-product';
import { magentoConfigurableProductFragment } from './configurable-product';

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
		...magentoBundledProduct
		...magentoSimpleProduct
		...magentoConfigurableProduct
	}
	${magentoBundledProductFragment}
	${magentoSimpleProductFragment}
	${magentoConfigurableProductFragment}
`;
