import { ApolloQueryResult } from 'apollo-client';

import { MagentoGetCountriesResponse } from '../queries/public_api';
import { DaffGeographyInvalidAPIResponseError } from '../../../errors/public_api';

export const validateGetCountriesResponse = (response: ApolloQueryResult<MagentoGetCountriesResponse>) => {
  if (response.data.countries) {
    return response
  } else {
    throw new DaffGeographyInvalidAPIResponseError('Get countries response does not contain a valid list of countries.')
  }
}
