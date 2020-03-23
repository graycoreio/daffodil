import { DaffErrorCodeMap } from '@daffodil/core';

import { MagentoCartGraphQlErrorCode } from './codes';
import { DaffCartNotFoundError } from '../../../errors/not-found';

export const DaffCartMagentoErrorMap: DaffErrorCodeMap = {
	[MagentoCartGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
};
