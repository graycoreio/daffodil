import { gql } from 'apollo-angular';

export const magentoProductSortFieldsFragment = gql`
  fragment magentoProductSortFields on SortFields {
    default
    options {
      label
      value
    }
  }
`;
