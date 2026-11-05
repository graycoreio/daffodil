import { gql } from 'apollo-angular';

export const DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME = 'MagentoGetProductFilterFieldTypes';

export const MagentoProductGetFilterTypes = gql`
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
