import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerPaymentInvalidAPIResponseError } from '@daffodil/customer-payment/driver';

import { MagentoCreateCustomerPaymentResponse } from '../models/public_api';

export const validateCreateCustomerPaymentResponse = (response: ApolloQueryResult<MagentoCreateCustomerPaymentResponse>) => {
  if (response.data.createTokenBaseCard?.hash) {
    return response;
  } else {
    throw new DaffCustomerPaymentInvalidAPIResponseError('Create customer payment response does not contain a payment.');
  }
};
