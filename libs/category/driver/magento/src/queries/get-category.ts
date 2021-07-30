import { gql } from 'apollo-angular';

export const DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME = 'MagentoGetCategoryQuery';

export const MagentoGetCategoryQuery = gql`
query ${DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME}($filters: CategoryFilterInput){
	categoryList(filters: $filters) {
		uid
    url_path
    url_suffix
    canonical_url
		name
		level
		meta_title
		meta_description
		description
		breadcrumbs {
			category_uid
			category_name
			category_level
			category_url_path
		}
		products {
			items {
				sku
			}
		}
		children_count
	}
}`;
