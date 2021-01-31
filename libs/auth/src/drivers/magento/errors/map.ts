import { DaffErrorCodeMap } from '@daffodil/core';
import { DaffBadInputError } from '@daffodil/driver';

import {
  DaffUnauthorizedError,
  DaffAuthenticationFailedError,
} from '../../../errors/public_api';
import { MagentoAuthGraphQlErrorCode } from './codes';

export const DaffAuthMagentoErrorMap: DaffErrorCodeMap = {
  [MagentoAuthGraphQlErrorCode.UNAUTHORIZED]: DaffUnauthorizedError,
  [MagentoAuthGraphQlErrorCode.AUTHENTICATION_FAILED]: DaffAuthenticationFailedError,
  [MagentoAuthGraphQlErrorCode.BAD_INPUT]: DaffBadInputError,
};
