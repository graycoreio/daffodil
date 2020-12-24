import { DaffErrorCodeMap } from '@daffodil/core';
import { DaffBadInputError } from '@daffodil/driver';
import { DaffCartNotFoundError, DaffCartDriverErrorCodes } from '@daffodil/cart/driver';

import { MagentoCartGraphQlErrorCode } from './codes';

export const DaffCartMagentoErrorMap: DaffErrorCodeMap = {
	[MagentoCartGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
	[MagentoCartGraphQlErrorCode.BAD_INPUT]: DaffBadInputError,
};

export const DaffCartMagentoErrorMessageRegexMap = {
  [DaffCartDriverErrorCodes.INVALID_COUPON_CODE]: /The coupon code isn\'t valid/
}
