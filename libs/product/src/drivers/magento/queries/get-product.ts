import {gql} from 'apollo-angular';

import { magentoProductFragment } from './fragments/product';

export const GetProductQuery = gql`
query MagentoGetAProduct($sku: String!){
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
		}
	}
}
${magentoProductFragment}
`
