import { Apollo } from 'apollo-angular';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoDeleteCustomerAddressResponse } from '../models/public_api';

export const validateDeleteCustomerAddressResponse = (response: Apollo.QueryResult<MagentoDeleteCustomerAddressResponse>) => {
  if (response.data.deleteCustomerAddress) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Delete customer address did not complete successfully.');
  }
};
