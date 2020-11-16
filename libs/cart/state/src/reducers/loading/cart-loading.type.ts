import { DaffLoadingState } from '@daffodil/core/state';

import { DaffCartOperationType } from '../cart-operation-type.enum';

export interface DaffCartLoading {
	[DaffCartOperationType.Cart]: DaffLoadingState;
	[DaffCartOperationType.Item]: DaffCartItemLoadingState;
	[DaffCartOperationType.BillingAddress]: DaffLoadingState;
	[DaffCartOperationType.ShippingAddress]: DaffLoadingState;
	[DaffCartOperationType.Payment]: DaffLoadingState;
	[DaffCartOperationType.PaymentMethods]: DaffLoadingState;
	[DaffCartOperationType.ShippingInformation]: DaffLoadingState;
	[DaffCartOperationType.ShippingMethods]: DaffLoadingState;
	[DaffCartOperationType.Coupon]: DaffLoadingState;
}

export enum DaffCartItemLoadingState {
  Resolving = 'Resolving',
	Mutating = 'Mutating',
	Adding = 'Adding',
  Complete = 'Complete',
}

export const initializeLoadingSetter = (loadingSpace: DaffCartOperationType) =>
  (loadingObj: DaffCartLoading, loading: DaffLoadingState | DaffCartItemLoadingState) => ({
    loading: {
      ...loadingObj,
      [loadingSpace]: loading
    }
	})
