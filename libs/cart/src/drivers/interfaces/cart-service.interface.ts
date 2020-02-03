import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DaffCart } from '../../models/cart';
import { DaffCartServiceInterface } from '../interfaces/cart-service.interface';

export interface DaffCartServiceInterface<T extends DaffCart> {
  get(): Observable<T>;
  addToCart(productId: string, qty: number): Observable<T>;
  clear(): Observable<void>;
}

export const DaffCartDriver 
  = new InjectionToken<DaffCartServiceInterface<any>>('DaffCartDriver');

