import { Observable } from 'rxjs';

import { DaffGetCategoryResponse } from '../../models/get-category-response';
import { DaffCategoryRequest } from '../../models/requests/category-request';

export interface DaffCategoryServiceInterface {
  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse>;
}
