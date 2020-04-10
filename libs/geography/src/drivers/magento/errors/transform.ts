import { daffTransformMagentoError } from '@daffodil/driver';

import { DaffGeographyMagentoErrorMap } from './map';

export function transformMagentoGeographyError(error: any) {
  return daffTransformMagentoError(error, DaffGeographyMagentoErrorMap)
}
