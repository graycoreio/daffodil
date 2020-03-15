import gql from 'graphql-tag';

export const MagentoGetCategoryQuery = gql`
query MagentoGetCategoryQuery($filters: CategoryFilterInput){
	categoryList(filters: $filters) {
		id
		name
		level
		description
		breadcrumbs {
			category_id
			category_name
			category_level
			category_url_key
		}
		products {
			items {
				sku
			}
		}
		children_count
	}
}`
