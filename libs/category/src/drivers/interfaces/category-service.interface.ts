import { Observable } from 'rxjs';

import { DaffGetCategoryResponse } from '../../models/inputs/get-category-response';
import { DaffCategoryRequest } from '../../models/outputs/category-request';

export interface DaffCategoryServiceInterface {
  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse>;
}
