import { DaffLoadingState } from '@daffodil/core';

import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartLoading } from './cart-loading.type';

export const initializeLoadingSetter = (loadingSpace: DaffCartOperationType) =>
  (loadingObj: DaffCartLoading, loading: DaffLoadingState) => ({
    loading: {
      ...loadingObj,
      [loadingSpace]: loading
    }
  })
