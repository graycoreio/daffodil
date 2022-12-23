import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';

export function transformMagentoReviewsError(error: any) {
  return daffTransformMagentoError(error, {}) || new DaffCustomerInvalidAPIResponseError(error.message);
}
