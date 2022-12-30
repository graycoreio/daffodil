import { gql } from 'apollo-angular';

import { countryFragment } from './fragments/public_api';

export const MAGENTO_GET_COUNTRIES_QUERY_NAME = 'MagentoGetCountries';

export const getCountries = gql`
  query ${MAGENTO_GET_COUNTRIES_QUERY_NAME} {
    countries {
      ...country
    }
  }
  ${countryFragment}
`;
