import { Apollo } from 'apollo-angular';

import { DaffCustomerPaymentInvalidAPIResponseError } from '@daffodil/customer-payment/driver';

import { MagentoGetCustomerPaymentsResponse } from '../models/public_api';

export const validateGetCustomerPaymentsResponse = (response: Apollo.QueryResult<MagentoGetCustomerPaymentsResponse>) => {
  if (response.data.tokenBaseCards) {
    return response;
  } else {
    throw new DaffCustomerPaymentInvalidAPIResponseError('Get customer payment response does not contain payments.');
  }
};
