import { gql } from '@damienwebdev/apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';
import { magentoProductFragment } from '@daffodil/product/driver/magento';

import { magentoCategoryTreeFragment } from './fragments/public_api';

export const DAFF_MAGENTO_GET_CATEGORY_AND_PRODUCTS_QUERY_NAME = 'MagentoGetCategoryAndProducts';

export const MagentoGetCategoryAndProductsQuery = (extraProductFragments: DocumentNode[] = []) => gql`
query ${DAFF_MAGENTO_GET_CATEGORY_AND_PRODUCTS_QUERY_NAME}($categoryFilters: CategoryFilterInput, $productFilter: ProductAttributeFilterInput!, $search: String, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput)
{
  categoryList(filters: $categoryFilters) {
		...categoryTree
	}
	products(filter: $productFilter, search: $search, pageSize: $pageSize, currentPage: $currentPage, sort: $sort)
	{
		total_count
		items {
			...product
      ${daffBuildFragmentNameSpread(...extraProductFragments)}
		}
		page_info {
			page_size
			current_page
			total_pages
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
		sort_fields {
			default
			options {
				label
				value
			}
		}
	}
}
${magentoCategoryTreeFragment}
${magentoProductFragment}
${daffBuildFragmentDefinition(...extraProductFragments)}
`;
