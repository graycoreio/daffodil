import gql from 'graphql-tag';

import { countryFragment, regionFragment } from './fragments/public_api';

export const getCountry = gql`
  query GetCountry($countryId: String!) {
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
