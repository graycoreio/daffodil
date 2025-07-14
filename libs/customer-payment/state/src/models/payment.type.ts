import { DaffOperationEntity } from '@daffodil/core/state';
import { DaffCustomerPayment } from '@daffodil/customer-payment';

export type DaffCustomerPaymentEntity<T extends DaffCustomerPayment = DaffCustomerPayment> = DaffOperationEntity<T>;
