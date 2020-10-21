import { DaffErrorCodeMap } from '@daffodil/core';

import { DaffCartNotFoundError } from '@daffodil/cart';

import { MagentoOrderGraphQlErrorCode } from './codes';

export const DaffOrderMagentoErrorMap: DaffErrorCodeMap = {
	[MagentoOrderGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
};
