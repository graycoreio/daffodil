import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoUpdateCustomerAddressResponse } from '../models/public_api';

export const validateUpdateCustomerAddressResponse = (response: ApolloQueryResult<MagentoUpdateCustomerAddressResponse>) => {
  if (response.data.updateCustomerAddress?.id) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Update customer address response does not contain an address.');
  }
};
