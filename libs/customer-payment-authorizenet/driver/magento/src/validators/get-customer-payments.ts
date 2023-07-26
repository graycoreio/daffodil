import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerPaymentInvalidAPIResponseError } from '@daffodil/customer-payment/driver';

import { MagentoGetCustomerPaymentsResponse } from '../models/public_api';

export const validateGetCustomerPaymentsResponse = (response: ApolloQueryResult<MagentoGetCustomerPaymentsResponse>) => {
  if (response.data.tokenBaseCards) {
    return response;
  } else {
    throw new DaffCustomerPaymentInvalidAPIResponseError('Get customer payment response does not contain payments.');
  }
};
