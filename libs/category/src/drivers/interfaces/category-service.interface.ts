import { Observable } from 'rxjs';

import { DaffGetCategoryResponse } from '../../models/get-category-response';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';

export interface DaffCategoryServiceInterface<
	T extends DaffCategoryRequest, 
	U extends DaffGenericCategory<U>,
	V extends DaffCategoryPageConfigurationState
> {
  get(categoryRequest: T): Observable<DaffGetCategoryResponse<U, V>>;
}
