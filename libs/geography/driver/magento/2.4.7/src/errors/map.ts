import { DaffErrorCodeMap } from '@daffodil/core';
import { DaffCountryNotFoundError } from '@daffodil/geography/driver';

import { MagentoGeographyGraphQlErrorCode } from './codes';

export const DaffGeographyMagentoErrorMap: DaffErrorCodeMap = {
  [MagentoGeographyGraphQlErrorCode.COUNTRY_NOT_FOUND]: DaffCountryNotFoundError,
};
