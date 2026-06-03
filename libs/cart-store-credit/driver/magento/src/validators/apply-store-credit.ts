import { Apollo } from 'apollo-angular';

import { DaffCartStoreCreditInvalidAPIResponseError } from '@daffodil/cart-store-credit/driver';

import { MagentoApplyStoreCreditResponse } from '../models/public_api';

export const validateApplyStoreCreditResponse = (response: Apollo.QueryResult<MagentoApplyStoreCreditResponse>) => {
  if (response.data.applyStoreCreditToCart?.cart.applied_store_credit?.enabled) {
    return response;
  } else {
    throw new DaffCartStoreCreditInvalidAPIResponseError('The store credit feature is not enabled on this platform.');
  }
};
