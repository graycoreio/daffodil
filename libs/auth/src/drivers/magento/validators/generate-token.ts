import { ApolloQueryResult } from 'apollo-client';

import { MagentoGenerateTokenResponse } from '../queries/public_api';
import { DaffInvalidAPIResponseError } from '../../../errors/public_api';

export const validateGenerateTokenResponse = (response: ApolloQueryResult<MagentoGenerateTokenResponse>) => {
  if (response.data.generateCustomerToken.token) {
    return response
  } else {
    throw new DaffInvalidAPIResponseError('Generate token response is invalid.')
  }
}
