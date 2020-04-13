import { ApolloQueryResult } from 'apollo-client';

import { MagentoRevokeCustomerTokenResponse } from '../queries/public_api';
import { DaffInvalidAPIResponseError } from '../../../errors/public_api';

export const validateRevokeTokenResponse = (response: ApolloQueryResult<MagentoRevokeCustomerTokenResponse>) => {
  if (response.data.revokeCustomerToken.result) {
    return response
  } else {
    throw new DaffInvalidAPIResponseError('Revoke token response does not contain a successful result.')
  }
}
