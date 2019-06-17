import { Observable } from 'rxjs';

import { DaffCart } from '../../models/cart';

export interface DaffCartServiceInterface {
  get(): Observable<DaffCart>;
  addToCart(productId: string, qty: number): Observable<DaffCart>;
  clear(): Observable<void>;
}
