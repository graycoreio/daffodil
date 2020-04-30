import gql from 'graphql-tag';
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
		}
	}
}
${magentoProductFragment}
`
