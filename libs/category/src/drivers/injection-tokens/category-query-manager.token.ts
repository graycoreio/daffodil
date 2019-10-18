import { InjectionToken } from '@angular/core';
import { DaffCategoryQueryManagerInterface } from '../interfaces/category-query-manager.interface';

/**
 * Injection token that serves as a placeholder for any service that implements the DaffCategoryQueryManagerInterface.
 */
export const DaffCategoryQueryManager = 
    new InjectionToken<DaffCategoryQueryManagerInterface>('DaffCategoryQueryManager');
