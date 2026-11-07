import { daffTransformMagentoError } from '@daffodil/driver/magento/2.4.7';

import { DaffOrderMagentoErrorMap } from './map';

export function transformMagentoOrderError(error: any) {
  return daffTransformMagentoError(error, DaffOrderMagentoErrorMap);
}
