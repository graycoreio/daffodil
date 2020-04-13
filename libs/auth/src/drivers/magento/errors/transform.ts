import { daffTransformMagentoError } from '@daffodil/driver';

import { DaffAuthMagentoErrorMap } from './map';

export const transformMagentoAuthError = (error: any): Error => {
	return daffTransformMagentoError(error, DaffAuthMagentoErrorMap)
};
