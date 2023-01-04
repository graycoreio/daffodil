import { gql } from 'apollo-angular';

import {
  countryFragment,
  regionFragment,
} from './fragments/public_api';

export const MAGENTO_GET_COUNTRY_QUERY_NAME = 'MagentoGetCountry';

export const getCountry = gql`
  query ${MAGENTO_GET_COUNTRY_QUERY_NAME}($countryId: String!) {
    country(id: $countryId) {
      ...country
      available_regions {
        ...region
      }
    }
  }
  ${countryFragment}
  ${regionFragment}
`;
