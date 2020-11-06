import { DaffErrorCodeMap } from '@daffodil/core';
import { DaffBadInputError } from '@daffodil/driver';

import { MagentoAuthGraphQlErrorCode } from './codes';
import {
  DaffUnauthorizedError,
  DaffAuthenticationFailedError,
} from '../../../errors/public_api';

export const DaffAuthMagentoErrorMap: DaffErrorCodeMap = {
	[MagentoAuthGraphQlErrorCode.UNAUTHORIZED]: DaffUnauthorizedError,
	[MagentoAuthGraphQlErrorCode.AUTHENTICATION_FAILED]: DaffAuthenticationFailedError,
	[MagentoAuthGraphQlErrorCode.BAD_INPUT]: DaffBadInputError,
};
