import gql from 'graphql-tag';
import { bundledProductFragment } from './fragments/bundled-product';

export const GetProductQuery = gql`
query GetAProduct($sku: String!){
	storeConfig {
		secure_base_media_url
	}
	products(filter: {
		sku: {
			eq: $sku
		}
	}){
		items {
			__typename
			id
			url_key
			name
			sku
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
			... on BundleProduct {
				...bundledProductFragment
			}
		}
	}
}
${bundledProductFragment}
`
