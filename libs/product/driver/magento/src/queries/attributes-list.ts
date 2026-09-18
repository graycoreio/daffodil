import { gql } from 'apollo-angular';

export const DAFF_MAGENTO_GET_ATTRIBUTES_LIST_QUERY_NAME = 'MagentoGetAttributesList';

export const getAttributesList = () => gql`
  query ${DAFF_MAGENTO_GET_ATTRIBUTES_LIST_QUERY_NAME} {
    attributesList(entityType: CATALOG_PRODUCT, filters: {is_visible_on_front: true}) {
      items {
        code
        label
        frontend_input
        options {
          value
          label
        }
      }
      errors {
        type
        message
      }
    }
  }
`;
