import gql from 'graphql-tag';
import { bundledProductFragment } from './fragments/bundled-product';
import { magentoProductFragment } from './fragments/product';

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
			...product
			... on BundleProduct {
				...bundledProductFragment
			}
		}
	}
}
${magentoProductFragment}
${bundledProductFragment}
`
