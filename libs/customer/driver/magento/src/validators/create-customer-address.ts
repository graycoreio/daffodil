import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';

import { MagentoCreateCustomerAddressResponse } from '../models/public_api';

export const validateCreateCustomerAddressResponse = (response: ApolloQueryResult<MagentoCreateCustomerAddressResponse>) => {
  if (response.data.createCustomerAddress?.id) {
    return response;
  } else {
    throw new DaffCustomerInvalidAPIResponseError('Create customer address response does not contain an address.');
  }
};
