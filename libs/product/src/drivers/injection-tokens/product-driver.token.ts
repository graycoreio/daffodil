import { InjectionToken } from '@angular/core';
import { DaffProductServiceInterface } from '../interfaces/product-service.interface';
import { DaffProductUnion } from '../../models/product-union';

export const DaffProductDriver = 
    new InjectionToken<DaffProductServiceInterface<DaffProductUnion>>('DaffProductDriver');
