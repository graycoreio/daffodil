import { DaffErrorCodeMap } from '@daffodil/core';

import { MagentoCartGraphQlErrorCode } from './codes';
import {
  DaffBadInputError,
  DaffCartNotFoundError
} from '../../../errors/public_api';

export const DaffCartMagentoErrorMap: DaffErrorCodeMap = {
	[MagentoCartGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
	[MagentoCartGraphQlErrorCode.BAD_INPUT]: DaffBadInputError,
};
