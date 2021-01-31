import { ApolloQueryResult } from '@apollo/client/core';

import { DaffAuthInvalidAPIResponseError } from '../../../errors/public_api';
import { MagentoCheckTokenResponse } from '../queries/public_api';

export const validateCheckTokenResponse = (response: ApolloQueryResult<MagentoCheckTokenResponse>) => {
  if (response.data.customer.id) {
    return response;
  } else {
    throw new DaffAuthInvalidAPIResponseError('Check token response does not contain a valid customer ID.');
  }
};
