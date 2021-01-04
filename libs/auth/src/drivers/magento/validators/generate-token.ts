import {ApolloQueryResult} from '@apollo/client/core';

import { MagentoGenerateTokenResponse } from '../queries/public_api';
import { DaffAuthInvalidAPIResponseError } from '../../../errors/public_api';

export const validateGenerateTokenResponse = (response: ApolloQueryResult<MagentoGenerateTokenResponse>) => {
  if (response.data.generateCustomerToken.token) {
    return response
  } else {
    throw new DaffAuthInvalidAPIResponseError('Generate token response does not contain an auth token.')
  }
}
