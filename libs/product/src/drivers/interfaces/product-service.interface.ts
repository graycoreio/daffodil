import { Observable } from 'rxjs';

import { Product } from '../../models/product';

export interface DaffProductServiceInterface {
  getAll(): Observable<Product[]>;
  getBestSellers(): Observable<Product[]>;
  get(productId: string): Observable<Product>;
}
