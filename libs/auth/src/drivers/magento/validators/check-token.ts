import {ApolloQueryResult} from '@apollo/client/core';

import { MagentoCheckTokenResponse } from '../queries/public_api';
import { DaffAuthInvalidAPIResponseError } from '../../../errors/public_api';

export const validateCheckTokenResponse = (response: ApolloQueryResult<MagentoCheckTokenResponse>) => {
  if (response.data.customer.id) {
    return response
  } else {
    throw new DaffAuthInvalidAPIResponseError('Check token response does not contain a valid customer ID.')
  }
}
