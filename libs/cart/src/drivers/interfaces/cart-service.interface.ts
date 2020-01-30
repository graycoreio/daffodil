import { Observable } from 'rxjs';

import { DaffCart } from '../../models/cart';

export interface DaffCartServiceInterface<T extends DaffCart> {
  get(): Observable<T>;
  addToCart(productId: string, qty: number): Observable<T>;
  clear(): Observable<void>;
}
