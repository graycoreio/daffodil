import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffAuthMagentoErrorMap } from './map';

export const transformMagentoAuthError = (error: any): Error => {
	return daffTransformMagentoError(error, DaffAuthMagentoErrorMap)
};
