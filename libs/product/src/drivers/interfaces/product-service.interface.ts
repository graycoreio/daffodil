import { Observable } from 'rxjs';

import { DaffProduct } from '../../models/product';

export interface DaffProductServiceInterface {
  getAll(): Observable<DaffProduct[]>;
  getBestSellers(): Observable<DaffProduct[]>;
  get(productId: string): Observable<DaffProduct>;
}
