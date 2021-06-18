import { gql } from 'apollo-angular';

import { magentoBundledProductFragment } from './bundled-product';
import { magentoConfigurableProductFragment } from './configurable-product';
import { magentoSimpleProductFragment } from './simple-product';

export const magentoProductFragment = gql`
  fragment product on ProductInterface {
		__typename
		uid
		url_key
    url_suffix
		name
		meta_title
		meta_description
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
    thumbnail {
			url
			label
		}
		media_gallery_entries {
			label
			file
			position
			disabled
			uid
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
