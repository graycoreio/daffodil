import { DaffCartPayment } from '../../models/cart-payment';

/**
 * An interface that must be implemented by payment transformer services; e.g. a service that transforms a magento payment into a DaffCartPayment.
 */
export interface DaffCartPaymentTransformerInterface<T extends DaffCartPayment> {
  /**
   * Transform a single payment into a kind of DaffCartPayment.
   */
  transform(payment: any): T;
}
