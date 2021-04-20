import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffGenericCategory,
  DaffCategory,
  DaffGetCategoryResponseReplacement,
  DaffCategoryRequestReplacement,
} from '@daffodil/category';
import { DaffProduct } from '@daffodil/product';

export interface DaffCategoryServiceInterface<
	V extends DaffGenericCategory<V> = DaffCategory,
	W extends DaffProduct = DaffProduct
> {
  get(categoryRequest: DaffCategoryRequestReplacement): Observable<DaffGetCategoryResponseReplacement<V, W>>;
}

//TODO(damienwebdev): This any generic is necessary until we ship Ivy packages, do not change it.
//See: https://github.com/ng-packagr/ng-packagr/issues/1844
export const DaffCategoryDriver = new InjectionToken<any>('DaffCategoryDriver');
