import { daffTransformMagentoError } from '@daffodil/driver/magento/2.4.7';

import { DaffGeographyMagentoErrorMap } from './map';

export function transformMagentoGeographyError(error: any) {
  return daffTransformMagentoError(error, DaffGeographyMagentoErrorMap);
}
