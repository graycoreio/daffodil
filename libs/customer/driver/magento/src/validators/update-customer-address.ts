import { Apollo } from 'apollo-angular';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoUpdateCustomerAddressResponse } from '../models/public_api';

export const validateUpdateCustomerAddressResponse = (response: Apollo.QueryResult<MagentoUpdateCustomerAddressResponse>) => {
  if (response.data.updateCustomerAddress?.id) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Update customer address response does not contain an address.');
  }
};
