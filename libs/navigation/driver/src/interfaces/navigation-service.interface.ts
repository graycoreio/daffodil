import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffGenericNavigationTree } from '@daffodil/navigation';

export interface DaffNavigationServiceInterface<T extends DaffGenericNavigationTree<T>> {
  get(categoryId: string): Observable<T>;
}

export const DaffNavigationDriver =
  new InjectionToken<DaffNavigationServiceInterface<any>>('DaffNavigationDriver');
