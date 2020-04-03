import { InjectionToken } from '@angular/core';
import { DaffProductServiceInterface } from '../interfaces/product-service.interface';

/**
 * Injection token that serves as a placeholder for any service that implements the DaffProductServiceInterface.
 */
export const DaffProductDriver = 
    new InjectionToken<DaffProductServiceInterface<any>>('DaffProductDriver');
