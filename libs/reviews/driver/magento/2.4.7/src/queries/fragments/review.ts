import { gql } from 'apollo-angular';

export const magentoProductReviewFragment = gql`
  fragment magentoProductReview on ProductReview {
    average_rating
    created_at
    nickname
    ratings_breakdown {
      name
      value
    }
    summary
    text
  }
`;
