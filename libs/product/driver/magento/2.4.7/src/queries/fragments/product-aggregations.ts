import { gql } from 'apollo-angular';

export const magentoProductAggregationsFragment = gql`
  fragment magentoProductAggregations on Aggregation {
    label
    count
    attribute_code
    options {
      count
      label
      value
    }
  }
`;
