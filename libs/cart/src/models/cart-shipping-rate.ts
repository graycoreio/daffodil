import { DaffIdentifiable } from '@daffodil/core';

/**
 * Contains information about a particular shipping option.
 */
export interface DaffCartShippingRate extends DaffIdentifiable {
  /**
   * Identifies the shipping carrier.
   */
  carrier: string;
  /**
   * A human-readable label of the shipping carrier.
   */
  carrier_title: string;
  /**
   * Identifies the shipping method.
   */
  method_code: string;
  /**
   * A human-readable label of the shipping method.
   */
  method_title: string;
  /**
   * A human-readable description of the shipping method.
   */
  method_description: string;
  /**
   * The price of the shipping option.
   */
  price: number;
}
