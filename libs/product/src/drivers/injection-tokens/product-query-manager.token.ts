import { InjectionToken } from '@angular/core';
import { DaffProductQueryManagerInterface } from '../interfaces/product-query-manager.interface';

/**
 * Injection token that serves as a placeholder for any service that implements the DaffProductQueryManagerInterface.
 */
export const DaffProductQueryManager = 
    new InjectionToken<DaffProductQueryManagerInterface>('DaffProductQueryManager');
