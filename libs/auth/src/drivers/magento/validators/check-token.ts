import { ApolloQueryResult } from 'apollo-client';

import { MagentoCheckTokenResponse } from '../queries/public_api';
import { DaffInvalidAPIResponseError } from '../../../errors/public_api';

export const validateCheckTokenResponse = (response: ApolloQueryResult<MagentoCheckTokenResponse>) => {
  if (response.data.customer.id) {
    return response
  } else {
    throw new DaffInvalidAPIResponseError('Check token response does not contain a valid customer ID.')
  }
}
