import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerPaymentInvalidAPIResponseError } from '@daffodil/customer-payment/driver';

import { MagentoUpdateCustomerPaymentResponse } from '../models/public_api';

export const validateUpdateCustomerPaymentResponse = (response: ApolloQueryResult<MagentoUpdateCustomerPaymentResponse>) => {
  if (response.data.updateTokenBaseCard?.hash) {
    return response;
  } else {
    throw new DaffCustomerPaymentInvalidAPIResponseError('Update customer payment response does not contain a payment.');
  }
};
