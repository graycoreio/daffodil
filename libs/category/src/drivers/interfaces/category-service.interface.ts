import { Observable } from 'rxjs';

import { DaffCategory } from '../../models/category';

export interface DaffCategoryServiceInterface {
  getAll(): Observable<DaffCategory[]>;
  get(categoryId: string): Observable<DaffCategory>;
}
