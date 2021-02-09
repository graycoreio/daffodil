import {gql} from 'apollo-angular';

import { countryFragment } from './fragments/public_api';

export const getCountries = gql`
  query MagentoGetCountries {
    countries {
      ...country
    }
  }
  ${countryFragment}
`;
