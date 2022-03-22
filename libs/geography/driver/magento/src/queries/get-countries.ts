import { gql } from '@damienwebdev/apollo-angular';

import { countryFragment } from './fragments/public_api';

export const getCountries = gql`
  query MagentoGetCountries {
    countries {
      ...country
    }
  }
  ${countryFragment}
`;
