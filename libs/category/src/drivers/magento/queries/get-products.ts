import gql from 'graphql-tag';

/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 */
export const MagentoGetProductsQuery = gql`
query MagentoGetProducts($filter: ProductAttributeFilterInput!, $search: String, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput)
{
	products(filter: $filter, search: $search, pageSize: $pageSize, currentPage: $currentPage, sort: $sort)
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
			price {
				regularPrice {
					amount {
						value
						currency
					}
				}
			}
		}
		aggregations {
			label
			count
			attribute_code
			options {
					count
					label
					value
			}
		}
		page_info {
			page_size
			current_page
			total_pages
		}
		sort_fields {
			default
			options {
				label
				value
			}
		}
	}
}`
