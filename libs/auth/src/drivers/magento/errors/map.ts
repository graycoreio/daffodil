import { DaffErrorCodeMap } from '@daffodil/core';

import { MagentoAuthGraphQlErrorCode } from './codes';
import {
  DaffUnauthorizedError,
  DaffAuthenticationFailedError,
  DaffBadInputError
} from '../../../errors/public_api';

export const DaffAuthMagentoErrorMap: DaffErrorCodeMap = {
	[MagentoAuthGraphQlErrorCode.UNAUTHORIZED]: DaffUnauthorizedError,
	[MagentoAuthGraphQlErrorCode.AUTHENTICATION_FAILED]: DaffAuthenticationFailedError,
	[MagentoAuthGraphQlErrorCode.BAD_INPUT]: DaffBadInputError,
};
