import { gql } from 'apollo-angular';

import { magentoProductFragment } from './fragments/product';

export const DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME = 'MagentoGetAProductByUrl';

export const GetProductByUrlQuery = gql`
query ${DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME}($url: String!){
	products(filter: {
		url_key: {
			eq: $url
		}
	}){
		items {
			...product
		}
	}
}
${magentoProductFragment}
`;
