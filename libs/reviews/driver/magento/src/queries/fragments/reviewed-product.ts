import { gql } from 'apollo-angular';

export const magentoReviewedProductFragment = gql`
  fragment magentoReviewedProduct on ProductInterface {
    review_count
    rating_summary
  }
`;
