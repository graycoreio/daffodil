import { Apollo } from 'apollo-angular';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';

import { MagentoRevokeCustomerTokenResponse } from '../queries/public_api';

export const validateRevokeTokenResponse = (response: Apollo.QueryResult<MagentoRevokeCustomerTokenResponse>) => {
  if (response.data.revokeCustomerToken.result) {
    return response;
  } else {
    throw new DaffAuthInvalidAPIResponseError('Revoke token response does not contain a successful result.');
  }
};
