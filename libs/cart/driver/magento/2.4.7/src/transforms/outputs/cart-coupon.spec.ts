import { daffMagentoCouponTransform as transform } from './cart-coupon';

describe('@daffodil/cart/driver/magento | Transformer | MagentoCartCoupon', () => {
  let result;
  let code: string;

  beforeEach(() => {
    code = 'code';
    result = transform({ code });
  });

  it('should return an object with the correct code', () => {
    expect(result.code).toEqual(code);
  });

  it('should return an object with the correct id', () => {
    expect(result.id).toEqual(code);
  });
});
