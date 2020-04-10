import { ApolloQueryResult } from 'apollo-client';

import { MagentoGetCountriesResponse } from '../queries/public_api';
import { DaffInvalidAPIResponseError } from '../../../errors/public_api';

export const validateGetCountriesResponse = (response: ApolloQueryResult<MagentoGetCountriesResponse>) => {
  if (response.data.countries) {
    return response
  } else {
    throw new DaffInvalidAPIResponseError('Get countries response is invalid.')
  }
}
