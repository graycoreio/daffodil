import { daffTransformMagentoError } from '@daffodil/driver/magento/2.4.7';

import { DaffContentMagentoErrorMap } from './map';

export function transformMagentoContentError(error: any) {
  return daffTransformMagentoError(error, DaffContentMagentoErrorMap);
}
