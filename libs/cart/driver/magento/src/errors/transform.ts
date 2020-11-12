import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffCartMagentoErrorMap } from './map';

export function transformCartMagentoError(error) {
  return daffTransformMagentoError(error, DaffCartMagentoErrorMap)
}
