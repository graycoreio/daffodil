import { gql } from '@damienwebdev/apollo-angular';

import { magentoCategoryTreeFragment } from './fragments/public_api';

export const DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME = 'MagentoGetCategoryQuery';

export const MagentoGetCategoryQuery = gql`
query ${DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME}($filters: CategoryFilterInput){
	categoryList(filters: $filters) {
		...categoryTree
	}
}
${magentoCategoryTreeFragment}
`;
