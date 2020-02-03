import { DaffCart } from '../../../models/cart';
import { InjectionToken } from '@angular/core';

/**
 * An interface that must be implemented by cart transformer services.
 * 
 * This transformer is responsible for transforming the returned
 * cart from a given platform into a Generic DaffCart.
 */
export interface DaffCartTransformerInterface<RES, T extends DaffCart> {
  transform(response: RES): T;
}

export const DaffCartTransformer 
  = new InjectionToken<DaffCartTransformerInterface<any, any>>('DaffCartTransformer');

