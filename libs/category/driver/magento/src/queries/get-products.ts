import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';
import {
  magentoProductAggregationsFragment,
  magentoProductFragment,
  magentoProductPageInfoFragment,
  magentoProductSortFieldsFragment,
} from '@daffodil/product/driver/magento';

export const DAFF_MAGENTO_GET_PRODUCTS_QUERY_NAME = 'MagentoGetProducts';
// TODO(griest024): should this be using the product preview fragment instead?
/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 */
export const MagentoGetProductsQuery = (extraProductFragments: DocumentNode[] = []) => gql`
query ${DAFF_MAGENTO_GET_PRODUCTS_QUERY_NAME}($filter: ProductAttributeFilterInput!, $search: String, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput)
{
	products(filter: $filter, search: $search, pageSize: $pageSize, currentPage: $currentPage, sort: $sort)
	{
		total_count
		items {
			...product
      ${daffBuildFragmentNameSpread(...extraProductFragments)}
		}
		page_info {
			...magentoProductPageInfo
		}
		aggregations {
			...magentoProductAggregations
		}
		sort_fields {
			...magentoProductSortFields
		}
	}
}
${magentoProductFragment}
${magentoProductPageInfoFragment}
${magentoProductSortFieldsFragment}
${magentoProductAggregationsFragment}
${daffBuildFragmentDefinition(...extraProductFragments)}
`;
