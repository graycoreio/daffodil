import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoChangeEmailResponse } from '../models/public_api';

export const validateChangeEmailResponse = (response: ApolloQueryResult<MagentoChangeEmailResponse>) => {
  if (response.data.updateCustomerEmail.customer?.email) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Update email response does not contain a valid customer.');
  }
};
