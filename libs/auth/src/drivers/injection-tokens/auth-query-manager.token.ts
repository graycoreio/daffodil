import { InjectionToken } from '@angular/core';
import { DaffAuthQueryManagerInterface } from '../interfaces/auth-query-manager.interface';

/**
 * Injection token that serves as a placeholder for any service that implements the DaffAuthQueryManagerInterface.
 */
export const DaffAuthQueryManager =
    new InjectionToken<DaffAuthQueryManagerInterface>('DaffAuthQueryManager');
