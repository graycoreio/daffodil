import { daffAdd } from '@daffodil/core';

import { DaffCartItem } from '../models/public_api';

export function daffCartGetItemTotalDiscount(item: DaffCartItem): number {
  return item?.discounts?.reduce((acc, { amount }) => daffAdd(acc, amount), 0) || 0;
}
