import { DaffCartCoupon } from '@daffodil/cart';

import { MagentoCartCoupon } from '../../models/responses/public_api';

export function daffMagentoCouponTransform(coupon: MagentoCartCoupon): DaffCartCoupon {
  return {
    ...{ magento_coupon: coupon },
    code: coupon.code,
  };
}
