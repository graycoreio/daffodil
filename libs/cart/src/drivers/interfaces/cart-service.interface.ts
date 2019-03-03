import { Observable } from 'rxjs';

import { Cart } from '../../models/cart';

export interface DaffCartServiceInterface {
  get(): Observable<Cart>;
  addToCart(productId: string, qty: number): Observable<Cart>;
  clear(): Observable<void>;
}
