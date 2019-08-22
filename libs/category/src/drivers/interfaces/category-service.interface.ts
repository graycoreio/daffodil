import { Observable } from 'rxjs';

import { DaffCategory } from '../../models/category';

export interface DaffCategoryServiceInterface {
  get(categoryId: string): Observable<DaffCategory>;
}
