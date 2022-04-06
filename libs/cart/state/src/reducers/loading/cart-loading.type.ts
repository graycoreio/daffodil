import {
  DaffLoadingState,
  DaffMutableLoadingState,
  DaffState,
} from '@daffodil/core/state';

import { DaffCartOperationType } from '../cart-operation-type.enum';

export interface DaffCartLoading {
  [DaffCartOperationType.Cart]: DaffMutableLoadingState;
  [DaffCartOperationType.Item]: DaffCartItemLoadingState;
  [DaffCartOperationType.BillingAddress]: DaffMutableLoadingState;
  [DaffCartOperationType.ShippingAddress]: DaffMutableLoadingState;
  [DaffCartOperationType.Payment]: DaffMutableLoadingState;
  [DaffCartOperationType.PaymentMethods]: DaffLoadingState;
  [DaffCartOperationType.ShippingInformation]: DaffMutableLoadingState;
  [DaffCartOperationType.ShippingMethods]: DaffLoadingState;
  [DaffCartOperationType.Coupon]: DaffMutableLoadingState;
}

export type DaffCartItemLoadingState = DaffMutableLoadingState | DaffState.Adding;

export const initializeLoadingSetter = (loadingSpace: DaffCartOperationType) =>
  (loadingObj: DaffCartLoading, loading: DaffLoadingState | DaffMutableLoadingState | DaffCartItemLoadingState) => ({
    loading: {
      ...loadingObj,
      [loadingSpace]: loading,
    },
  });
