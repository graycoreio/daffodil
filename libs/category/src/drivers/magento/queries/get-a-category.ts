import gql from 'graphql-tag';

export const GetACategoryQuery = gql`
query GetACategory($id: Int!, $currentPage: Int, $pageSize: Int, $sort: ProductSortInput ){
	category(id: $id) {
		id
		name
		breadcrumbs {
			category_id
			category_name
			category_level
			category_url_key
		}
		products(
			currentPage: $currentPage
			pageSize: $pageSize
			sort: $sort
		) {
			total_count
			page_info {
					current_page
					page_size
					total_pages
			}
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
		}
		children_count
	}
}`