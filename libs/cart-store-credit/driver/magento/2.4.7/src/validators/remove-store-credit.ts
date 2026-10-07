import { Apollo } from 'apollo-angular';

import { DaffCartStoreCreditInvalidAPIResponseError } from '@daffodil/cart-store-credit/driver';

import { MagentoRemoveStoreCreditResponse } from '../models/public_api';

export const validateRemoveStoreCreditResponse = (response: Apollo.QueryResult<MagentoRemoveStoreCreditResponse>) => {
  if (response.data.removeStoreCreditFromCart?.cart.applied_store_credit?.enabled) {
    return response;
  } else {
    throw new DaffCartStoreCreditInvalidAPIResponseError('The store credit feature is not enabled on this platform.');
  }
};
