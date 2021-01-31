import { ApolloQueryResult } from '@apollo/client/core';

import { DaffAuthInvalidAPIResponseError } from '../../../errors/public_api';
import { MagentoRevokeCustomerTokenResponse } from '../queries/public_api';

export const validateRevokeTokenResponse = (response: ApolloQueryResult<MagentoRevokeCustomerTokenResponse>) => {
  if (response.data.revokeCustomerToken.result) {
    return response;
  } else {
    throw new DaffAuthInvalidAPIResponseError('Revoke token response does not contain a successful result.');
  }
};
