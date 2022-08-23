import { gql } from 'apollo-angular';

import { magentoProductPageInfoFragment } from '@daffodil/product/driver/magento';

import { magentoProductReviewFragment } from './fragments/public_api';

export const getProductReviews = gql`
  query MagentoProductReviews($id: String!, $pageSize: Int, $currentPage: Int) {
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
            ...magentoProductPageInfo
          }
        }
      }
    }
  }
  ${magentoProductReviewFragment}
  ${magentoProductPageInfoFragment}
`;
