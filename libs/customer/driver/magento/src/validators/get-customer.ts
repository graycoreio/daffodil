import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoGetCustomerResponse } from '../models/public_api';

export const validateGetCustomerResponse = (response: ApolloQueryResult<MagentoGetCustomerResponse>) => {
  if (response.data.customer?.email) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Get customer response does not contain a valid customer.');
  }
};
