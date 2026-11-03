import { Apollo } from 'apollo-angular';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';

import { MagentoCheckTokenResponse } from '../queries/public_api';

export const validateCheckTokenResponse = (response: Apollo.QueryResult<MagentoCheckTokenResponse>) => {
  if (response.data.customer.email) {
    return response;
  } else {
    throw new DaffAuthInvalidAPIResponseError('Check token response does not contain a valid customer email.');
  }
};
