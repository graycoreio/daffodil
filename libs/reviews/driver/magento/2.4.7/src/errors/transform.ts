import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffReviewsMagentoErrorMap } from './map';

export function transformMagentoReviewsError(error: any) {
  return daffTransformMagentoError(error, DaffReviewsMagentoErrorMap);
}
