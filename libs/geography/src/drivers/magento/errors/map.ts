import { DaffErrorCodeMap } from '@daffodil/core';

import { MagentoGeographyGraphQlErrorCode } from './codes';
import { DaffCountryNotFoundError } from '../../../errors/public_api';

export const DaffGeographyMagentoErrorMap: DaffErrorCodeMap = {
	[MagentoGeographyGraphQlErrorCode.COUNTRY_NOT_FOUND]: DaffCountryNotFoundError,
};
