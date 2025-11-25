import { gql } from 'apollo-angular';

export const magentoReviewedProductFragment = gql`
  fragment magentoReviewedProduct on ProductInterface {
		uid
    sku
    review_count
    rating_summary
  }
`;
