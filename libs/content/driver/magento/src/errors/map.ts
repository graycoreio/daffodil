import { DaffContentNotFoundError } from '@daffodil/content/driver';
import { DaffErrorCodeMap } from '@daffodil/core';

import { MagentoContentGraphQlErrorCode } from './codes';

export const DaffContentMagentoErrorMap: DaffErrorCodeMap = {
  [MagentoContentGraphQlErrorCode.BLOCK_NOT_FOUND]: DaffContentNotFoundError,
};
