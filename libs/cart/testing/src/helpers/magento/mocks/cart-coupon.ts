import { DaffCartCoupon, MagentoCartCoupon } from '@daffodil/cart';

import { MagentoCartCouponFactory } from '../../../factories/magento/cart-coupon.factory';
import { DaffCartCouponFactory } from '../../../factories/cart-coupon.factory';

/**
 * Creates mocked DaffCartCoupon and MagentoCartCoupon with matching fields.
 */
export function cartCouponMocks(): {
  daff: DaffCartCoupon;
  magento: MagentoCartCoupon;
} {
  const daff: DaffCartCoupon = (new DaffCartCouponFactory()).create();
  const magento: MagentoCartCoupon = (new MagentoCartCouponFactory()).create();

  magento.code = daff.code;

  return {daff, magento}
}
