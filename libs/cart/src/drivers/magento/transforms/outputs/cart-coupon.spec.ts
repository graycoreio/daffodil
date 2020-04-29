import { daffMagentoCouponTransform as transform } from './cart-coupon';

describe('Driver | Magento | Cart | Transformer | MagentoCartCoupon', () => {
  let result;
  let code: string;

  beforeEach(() => {
    code = 'code';
    result = transform({code});
  });

  it('should return an object with the correct code', () => {
    expect(result.code).toEqual(code);
  });
});
