import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento/2.4.7';

import { DaffAuthMagentoErrorMap } from './map';

export const transformMagentoAuthError = (error: any): Error => daffTransformMagentoError(error, DaffAuthMagentoErrorMap) || new DaffAuthInvalidAPIResponseError(error.message);
