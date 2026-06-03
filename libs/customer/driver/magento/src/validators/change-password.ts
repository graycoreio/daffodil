import { Apollo } from 'apollo-angular';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoChangePasswordResponse } from '../models/public_api';

export const validateChangePasswordResponse = (response: Apollo.QueryResult<MagentoChangePasswordResponse>) => {
  if (response.data.changeCustomerPassword?.email) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Change password response does not contain a valid customer.');
  }
};
