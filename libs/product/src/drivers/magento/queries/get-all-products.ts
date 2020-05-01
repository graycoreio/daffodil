import gql from 'graphql-tag';
import { magentoProductFragment } from './fragments/product';

export const GetAllProductsQuery = gql`
query GetAllProducts($pageSize: Int)
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
`
