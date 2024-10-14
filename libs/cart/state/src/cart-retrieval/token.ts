import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCartRetrievalActionInjection } from './type';

export const {
  /**
   * A token to hold {@link DaffCartRetrievalActionInjection}s.
   */
  token: DAFF_CART_RETRIEVAL_ACTIONS,

  /**
   * A provider function for {@link DAFF_CART_RETRIEVAL_ACTIONS}.
   */
  provider: daffCartProvideRetrievalActions,
} = createMultiInjectionToken<DaffCartRetrievalActionInjection>('DAFF_CART_RETRIEVAL_ACTIONS');
