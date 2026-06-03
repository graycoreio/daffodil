import { Apollo } from 'apollo-angular';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer-order/driver';

import { MagentoGetCustomerOrdersResponse } from '../models/public_api';

export const validateGetCustomerOrdersResponse = (response: Apollo.QueryResult<MagentoGetCustomerOrdersResponse>) => {
  if (response.data.customer?.orders.items) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Get customer orders response does not contain customer orders.');
  }
};
