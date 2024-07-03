import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer-order/driver';

import { MagentoGetCustomerOrdersResponse } from '../queries/public_api';

export const validateGetCustomerOrdersResponse = (response: ApolloQueryResult<MagentoGetCustomerOrdersResponse>) => {
  if (response.data.customer?.orders.items) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Get customer orders response does not contain customer orders.');
  }
};
