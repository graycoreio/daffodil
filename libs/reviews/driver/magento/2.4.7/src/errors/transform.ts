import { daffTransformMagentoError } from '@daffodil/driver/magento/2.4.7';

import { DaffReviewsMagentoErrorMap } from './map';

export function transformMagentoReviewsError(error: any) {
  return daffTransformMagentoError(error, DaffReviewsMagentoErrorMap);
}
