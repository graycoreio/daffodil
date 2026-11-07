import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer-order/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento/2.4.7';

export function transformMagentoReviewsError(error: any) {
  return daffTransformMagentoError(error, {}) || new DaffCustomerInvalidAPIResponseError(error.message);
}
