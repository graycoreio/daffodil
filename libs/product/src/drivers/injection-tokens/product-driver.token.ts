import { InjectionToken } from '@angular/core';
import { DaffProductServiceInterface } from '../interfaces/product-service.interface';
import { DaffProductUnion } from '../../models/product-union';

/**
 * Injection token that serves as a placeholder for any service that implements the DaffProductServiceInterface.
 */
export const DaffProductDriver = 
    new InjectionToken<DaffProductServiceInterface<DaffProductUnion>>('DaffProductDriver');
