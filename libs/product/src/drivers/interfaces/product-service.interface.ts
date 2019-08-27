import { Observable } from 'rxjs';

import { DaffProduct } from '../../models/product';

export interface DaffProductServiceInterface<T extends DaffProduct> {
  getAll(): Observable<T[]>;
  getBestSellers(): Observable<T[]>;
  get(productId: string): Observable<T>;
}
