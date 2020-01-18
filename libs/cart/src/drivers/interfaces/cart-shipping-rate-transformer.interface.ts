import { DaffCartShippingRate } from '../../models/cart-shipping-rate';

/**
 * An interface that must be implemented by shippingRate transformer services; e.g. a service that transforms a magento shippingRate into a DaffCartShippingRate.
 */
export interface DaffCartShippingRateTransformerInterface<T extends DaffCartShippingRate> {
  /**
   * Transform a single shippingRate into a kind of DaffCartShippingRate.
   */
  transform(shippingRate: any): T;
}
