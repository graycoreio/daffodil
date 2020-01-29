import { InjectionToken } from '@angular/core';
import { DaffCartServiceInterface } from '../interfaces/cart-service.interface';

export const DaffCartDriver = new InjectionToken<DaffCartServiceInterface<any>>('DaffCartDriver');
