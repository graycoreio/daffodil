import { DaffErrorCodeMap } from '@daffodil/core';
import { DaffBadInputError } from '@daffodil/driver';
import { DaffCartNotFoundError } from '@daffodil/cart/driver';

import { MagentoCartGraphQlErrorCode } from './codes';

export const DaffCartMagentoErrorMap: DaffErrorCodeMap = {
	[MagentoCartGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
	[MagentoCartGraphQlErrorCode.BAD_INPUT]: DaffBadInputError,
};
