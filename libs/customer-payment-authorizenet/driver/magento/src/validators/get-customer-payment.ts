import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerPaymentNotFoundError } from '@daffodil/customer-payment/driver';

import { MagentoGetCustomerPaymentResponse } from '../models/public_api';

export const validateGetCustomerPaymentResponse = (response: ApolloQueryResult<MagentoGetCustomerPaymentResponse>) => {
  if (response.data.tokenBaseCards[0]?.hash) {
    return response;
  } else {
    throw new DaffCustomerPaymentNotFoundError('Get customer payment response does not contain a payment.');
  }
};
