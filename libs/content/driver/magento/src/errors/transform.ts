import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffContentMagentoErrorMap } from './map';

export function transformMagentoContentError(error: any) {
  return daffTransformMagentoError(error, DaffContentMagentoErrorMap);
}
