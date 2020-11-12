import { DaffErrorCodeMap } from '@daffodil/core';
import { DaffCartNotFoundError } from '@daffodil/cart/driver';

import { MagentoOrderGraphQlErrorCode } from './codes';

export const DaffOrderMagentoErrorMap: DaffErrorCodeMap = {
	[MagentoOrderGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
};
