
import { InjectionToken } from '@angular/core';
import { DaffCartPaymentMethod } from '../../../models/cart-payment';

/**
 * An interface that must be implemented by payment transformer services; 
 * e.g. a service that transforms a Magento Cart Payment into a generic 
 * DaffCartPayment.
 */
export interface DaffCartPaymentTransformerInterface<T extends DaffCartPaymentMethod> {
  
  /**
   * Transform a single payment into a kind of DaffCartPayment.
   */
  transform(payment: any): T;
}


export const DaffCartPaymentTransformer 
  = new InjectionToken<DaffCartPaymentTransformerInterface<any>>('DaffCartPaymentTransformer');
