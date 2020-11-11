import gql from 'graphql-tag';

import { countryFragment } from './fragments/public_api';

export const getCountries = gql`
  query GetCountries {
    countries {
      ...country
    }
  }
  ${countryFragment}
`;
