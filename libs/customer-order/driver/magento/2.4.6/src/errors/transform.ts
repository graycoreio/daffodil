import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer-order/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';

export function transformMagentoReviewsError(error: any) {
  return daffTransformMagentoError(error, {}) || new DaffCustomerInvalidAPIResponseError(error.message);
}
