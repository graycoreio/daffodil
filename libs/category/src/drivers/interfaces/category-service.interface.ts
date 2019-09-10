import { Observable } from 'rxjs';

import { DaffGetCategoryResponse } from '../../models/get-category-response';

export interface DaffCategoryServiceInterface {
  get(categoryId: string): Observable<DaffGetCategoryResponse>;
}
