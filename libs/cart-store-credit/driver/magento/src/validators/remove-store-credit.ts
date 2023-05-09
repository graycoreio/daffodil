import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCartStoreCreditInvalidAPIResponseError } from '@daffodil/cart-store-credit/driver';

import { MagentoRemoveStoreCreditResponse } from '../models/public_api';

export const validateRemoveStoreCreditResponse = (response: ApolloQueryResult<MagentoRemoveStoreCreditResponse>) => {
  if (response.data.removeStoreCreditFromCart?.cart.applied_store_credit?.enabled) {
    return response;
  } else {
    throw new DaffCartStoreCreditInvalidAPIResponseError('The store credit feature is not enabled on this platform.');
  }
};
