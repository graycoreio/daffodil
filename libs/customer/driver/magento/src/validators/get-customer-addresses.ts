import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoGetCustomerAddressesResponse } from '../models/public_api';

export const validateGetCustomerAddressesResponse = (response: ApolloQueryResult<MagentoGetCustomerAddressesResponse>) => {
  if (response.data.customer?.addresses) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Get customer address response does not contain addresses.');
  }
};
