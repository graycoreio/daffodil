import { InjectionToken } from '@angular/core';
import { DaffCartAddress } from '../../../models/cart-address';

/**
 * An interface that must be implemented by address transformer services; e.g. a service that transforms a magento address into a DaffCartAddress.
 */
export interface DaffCartAddressTransformerInterface<T extends DaffCartAddress> {
  /**
   * Transform a single address into a kind of DaffCartAddress.
   */
  transform(address: any): T;
}


export const DaffCartAddressTransformer 
  = new InjectionToken<DaffCartAddressTransformerInterface<any>>('DaffCartAddressTransformer');

