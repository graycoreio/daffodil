import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoDeleteCustomerAddressResponse } from '../models/public_api';

export const validateDeleteCustomerAddressResponse = (response: ApolloQueryResult<MagentoDeleteCustomerAddressResponse>) => {
  if (response.data.deleteCustomerAddress) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Delete customer address did not complete successfully.');
  }
};
