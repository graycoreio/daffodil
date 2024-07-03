import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer-order/driver';

import { MagentoGetCustomerOrderResponse } from '../models/public_api';

export const validateGetCustomerOrderResponse = (response: ApolloQueryResult<MagentoGetCustomerOrderResponse>) => {
  if (response.data.customer?.orders.items[0]) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Get customer order response does not contain a customer order.');
  }
};
