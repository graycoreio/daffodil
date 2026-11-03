import { Apollo } from 'apollo-angular';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';

import { MagentoGenerateTokenResponse } from '../queries/public_api';

export const validateGenerateTokenResponse = (response: Apollo.QueryResult<MagentoGenerateTokenResponse>) => {
  if (response.data.generateCustomerToken.token) {
    return response;
  } else {
    throw new DaffAuthInvalidAPIResponseError('Generate token response does not contain an auth token.');
  }
};
