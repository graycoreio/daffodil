import { gql } from 'apollo-angular';

export const DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME = 'MagentoGetFilterFieldTypesForCategory';

export const MagentoGetCategoryFilterTypes = gql`
query ${DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME} {
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
