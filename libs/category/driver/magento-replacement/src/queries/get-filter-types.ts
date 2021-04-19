import { gql } from 'apollo-angular';

export const MagentoGetCategoryFilterTypes = gql`
query GetFilterTypesForCategory {
  __type (name: "ProductAttributeFilterInput") {
    inputFields {
      name
      type {
        name
      }
    }
  }
}
`;
