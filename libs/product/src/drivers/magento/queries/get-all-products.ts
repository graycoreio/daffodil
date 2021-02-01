import { gql } from 'apollo-angular';

import { magentoProductFragment } from './fragments/product';

export const DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME = 'MagentoGetAllProducts';

export const GetAllProductsQuery = gql`
query ${DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME}($pageSize: Int)
{
	products(search: "Shirt", pageSize: $pageSize)
	{
		total_count
		items {
			...product
		}
		page_info {
			page_size
			current_page
		}
	}
}
${magentoProductFragment}
`;
