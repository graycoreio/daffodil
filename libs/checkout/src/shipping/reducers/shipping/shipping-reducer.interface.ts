import { DaffAddress } from '@daffodil/core';

export interface DaffShippingReducerState {
  shippingAddress: DaffAddress,
  selectedShippingOptionId: string
}
