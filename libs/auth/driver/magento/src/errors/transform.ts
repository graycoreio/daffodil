import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffAuthMagentoErrorMap } from './map';

export const transformMagentoAuthError = (error: any): Error => daffTransformMagentoError(error, DaffAuthMagentoErrorMap) || new DaffAuthInvalidAPIResponseError(error.message);
