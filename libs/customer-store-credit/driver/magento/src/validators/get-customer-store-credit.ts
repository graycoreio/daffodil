import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerStoreCreditInvalidAPIResponseError } from '@daffodil/customer-store-credit/driver';

import { MagentoGetCustomerStoreCreditResponse } from '../models/public_api';

export const validateGetCustomerStoreCreditResponse = (response: ApolloQueryResult<MagentoGetCustomerStoreCreditResponse>) => {
  if (response.data.customer?.store_credit?.enabled) {
    return response;
  } else {
    throw new DaffCustomerStoreCreditInvalidAPIResponseError('The store credit feature is not enabled on this platform.');
  }
};
