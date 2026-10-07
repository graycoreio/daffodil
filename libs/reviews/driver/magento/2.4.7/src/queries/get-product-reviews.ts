import { gql } from 'apollo-angular';

import { magentoSearchResultPageInfoFragment } from '@daffodil/driver/magento';

import { magentoProductReviewFragment } from './fragments/public_api';

export const MAGENTO_REVIEWS_LIST_QUERY_NAME = 'MagentoProductReviews';

export const getProductReviews = gql`
  query ${MAGENTO_REVIEWS_LIST_QUERY_NAME}($id: String!, $pageSize: Int, $currentPage: Int) {
    products(filter: {
      sku: {
        eq: $id
      }
    }) {
      items {
        sku
        reviews(pageSize: $pageSize, currentPage: $currentPage) {
          items {
            ...magentoProductReview
          }
          page_info {
            ...magentoSearchResultPageInfo
          }
        }
      }
    }
  }
  ${magentoProductReviewFragment}
  ${magentoSearchResultPageInfoFragment}
`;
