import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffOrderMagentoErrorMap } from './map';

export function transformMagentoOrderError(error: any) {
  return daffTransformMagentoError(error, DaffOrderMagentoErrorMap)
}
