import { ID } from '@daffodil/core';

export interface DaffCartCoupon {
  coupon_id?: ID;
  code: string;
  description?: string;
}
