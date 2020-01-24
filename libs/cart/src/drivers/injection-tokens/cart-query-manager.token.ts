import { InjectionToken } from '@angular/core';
import { DaffCartQueryManagerInterface } from '../interfaces/cart-query-manager.interface';

/**
 * Injection token that serves as a placeholder for any service that implements the DaffCartQueryManagerInterface.
 */
export const DaffCartQueryManager =
    new InjectionToken<DaffCartQueryManagerInterface>('DaffCartQueryManager');
