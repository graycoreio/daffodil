import { MagentoCartCoupon } from '../../models/outputs/public_api';
import { DaffCartCoupon } from '../../../../models/cart-coupon';

export function daffMagentoCouponTransform(coupon: MagentoCartCoupon): DaffCartCoupon {
  return {
    ...{magento_coupon: coupon},
    code: coupon.code
  }
}
