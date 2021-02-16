import {gql} from 'apollo-angular';

export const DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME = 'MagentoGetCategoryQuery';

export const MagentoGetCategoryQuery = gql`
query ${DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME}($filters: CategoryFilterInput){
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
