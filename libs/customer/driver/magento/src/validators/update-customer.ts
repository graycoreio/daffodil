import { Apollo } from 'apollo-angular';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoUpdateCustomerResponse } from '../models/public_api';

export const validateUpdateCustomerResponse = (response: Apollo.QueryResult<MagentoUpdateCustomerResponse>) => {
  if (response.data.updateCustomerV2.customer?.email) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Update customer response does not contain a valid customer.');
  }
};
