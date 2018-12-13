import { Observable } from 'rxjs';
import { Product } from '@daffodil/productCore';

export interface DaffProductServiceInterface {
  getAll(): Observable<Product[]>;
  getBestSellers(): Observable<Product[]>;
  get(productId: string): Observable<Product>;
}
