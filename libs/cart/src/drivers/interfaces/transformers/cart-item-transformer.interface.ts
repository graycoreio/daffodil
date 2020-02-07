import { DaffCartItem } from '../../../models/cart-item';
import { InjectionToken } from '@angular/core';

/**
 * An interface that must be implemented by platform specific CartItem 
 * transformers; 
 * 
 * e.g. a service that transforms a Magento Cart Item into a DaffCartItem.
 */
export interface DaffCartItemTransformerInterface<T extends DaffCartItem> {
  
  /**
   * Transform a single cartItem into a kind of DaffCartItem.
   */
  transform(cartItem: any): T;
}

export const DaffCartItemTransformer = 
  new InjectionToken<DaffCartItemTransformerInterface<any>>('DaffCartItemTransformer');
