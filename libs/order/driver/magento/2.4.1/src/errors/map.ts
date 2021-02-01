import { DaffCartNotFoundError } from '@daffodil/cart/driver';
import { DaffErrorCodeMap } from '@daffodil/core';

import { MagentoOrderGraphQlErrorCode } from './codes';

export const DaffOrderMagentoErrorMap: DaffErrorCodeMap = {
  [MagentoOrderGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
};
