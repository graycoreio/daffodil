import gql from 'graphql-tag';

export const MagentoGetCategoryQuery = gql`
query MagentoGetCategoryQuery($filters: CategoryFilterInput){
	categoryList(filters: $filters) {
		id
		name
		level
		breadcrumbs {
			category_id
			category_name
			category_level
			category_url_key
		}
		children_count
	}
}`
