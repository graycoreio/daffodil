import { Observable } from 'rxjs';
import { Cart } from '../../../../index';

export interface DaffCartServiceInterface {
  get(): Observable<Cart>;
  addToCart(productId: string, qty: number): Observable<Cart>;
}
