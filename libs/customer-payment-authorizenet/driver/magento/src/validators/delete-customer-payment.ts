import { Apollo } from 'apollo-angular';

import { DaffCustomerPaymentInvalidAPIResponseError } from '@daffodil/customer-payment/driver';

import { MagentoDeleteCustomerPaymentResponse } from '../models/public_api';

export const validateDeleteCustomerPaymentResponse = (response: Apollo.QueryResult<MagentoDeleteCustomerPaymentResponse>) => {
  if (response.data.deleteTokenBaseCard) {
    return response;
  } else {
    throw new DaffCustomerPaymentInvalidAPIResponseError('Delete customer payment did not complete successfully.');
  }
};
