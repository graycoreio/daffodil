import { InjectionToken } from '@angular/core';
import { DaffProductQueryManagerInterface } from '../interfaces/product-query-manager.interface';

export const DaffProductQueryManager = 
    new InjectionToken<DaffProductQueryManagerInterface>('DaffProductQueryManager');
