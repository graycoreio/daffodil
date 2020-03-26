import gql from 'graphql-tag';

export const GetAllProductsQuery = gql`
query GetAllProducts($pageSize: Int)
{
	products(search: "Shirt", pageSize: $pageSize)
	{
		total_count
		items {
			id
			name
			sku
			url_key
			image {
				url
				label
			}
			price_range {
				maximum_price {
					regular_price {
						value
						currency
					}
				}
			}
		}
		page_info {
			page_size
			current_page
		}
	}
}`
