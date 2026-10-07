import { DaffErrorCodeMap } from '@daffodil/core';
import { DaffProductReviewsNotFoundError } from '@daffodil/reviews/driver';

import { MagentoGeographyGraphQlErrorCode } from './codes';

export const DaffReviewsMagentoErrorMap: DaffErrorCodeMap = {
  [MagentoGeographyGraphQlErrorCode.COUNTRY_NOT_FOUND]: DaffProductReviewsNotFoundError,
};
