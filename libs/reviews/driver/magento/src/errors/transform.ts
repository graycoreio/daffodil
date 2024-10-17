import { daffTransformMagentoError } from '@daffodil/driver/magento';

import { DaffReviewsMagentoErrorMap } from './map';

export const transformMagentoReviewsError = (error: any) => {
  return daffTransformMagentoError(error, DaffReviewsMagentoErrorMap);
}
