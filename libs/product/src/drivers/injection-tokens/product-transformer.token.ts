import { InjectionToken } from '@angular/core';
import { DaffProductTransformerInterface } from '../interfaces/product-transformer.interface';
import { DaffProductUnion } from '../../models/product-union';

/**
 * Injection token that serves as a placeholder for any service that implements the DaffProductTransformerInterface.
 */
export const DaffProductTransformer = 
    new InjectionToken<DaffProductTransformerInterface<DaffProductUnion>>('DaffProductTransformer');
