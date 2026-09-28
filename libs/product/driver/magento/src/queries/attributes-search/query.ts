import { gql } from 'apollo-angular';

import { MagentoCustomAttributeSearchResponse } from './response.type';
import { MagentoProductCustomAttributeSearchQueryVariables } from './variables.type';

export const MAGENTO_ATTRIBUTES_SEARCH_QUERY_NAME = 'MagentoAttributesSearch';

export const magentoAttributesSearch = () => gql<MagentoCustomAttributeSearchResponse, MagentoProductCustomAttributeSearchQueryVariables>`
  query ${MAGENTO_ATTRIBUTES_SEARCH_QUERY_NAME}($attributes: [AttributeInput!]!) {
    customAttributeMetadataV2(attributes: $attributes) {
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
