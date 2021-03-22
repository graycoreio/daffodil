import { gql } from 'apollo-angular';

import { magentoProductFragment } from './fragments/product';

export const DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME = 'MagentoGetAProduct';

export const GetProductQuery = gql`
query ${DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME}($sku: String!){
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
`;
