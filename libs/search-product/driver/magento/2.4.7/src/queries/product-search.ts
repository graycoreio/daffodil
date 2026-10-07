import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';
import { magentoSearchResultPageInfoFragment } from '@daffodil/driver/magento';
import {
  magentoProductAggregationsFragment,
  magentoProductFragment,
  magentoProductSortFieldsFragment,
} from '@daffodil/product/driver/magento';

export const DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME = 'MagentoSearchForProducts';

export const productSearch = (extraProductFragments: DocumentNode[] = []) => gql`
  query ${DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME}(
    $filter: ProductAttributeFilterInput!,
    $search: String,
    $pageSize: Int,
    $currentPage: Int,
    $sort: ProductAttributeSortInput
  ) {
    products(filter: $filter, search: $search, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
      items {
        ...product
        ${daffBuildFragmentNameSpread(...extraProductFragments)}
      }
      page_info {
			...magentoSearchResultPageInfo
      }
      aggregations {
        ...magentoProductAggregations
      }
      sort_fields {
        ...magentoProductSortFields
      }
		  total_count
    }
  }
  ${magentoSearchResultPageInfoFragment}
  ${magentoProductSortFieldsFragment}
  ${magentoProductAggregationsFragment}
  ${magentoProductFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
