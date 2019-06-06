import { Observable } from 'rxjs';

import { Product } from 'product/src/models/product';

export interface DaffProductServiceInterface {
  getAll(): Observable<Product[]>;
  getBestSellers(): Observable<Product[]>;
  get(productId: string): Observable<Product>;
}
