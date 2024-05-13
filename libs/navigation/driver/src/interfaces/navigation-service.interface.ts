import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffGenericNavigationTree } from '@daffodil/navigation';

export interface DaffNavigationServiceInterface<T extends DaffGenericNavigationTree<T>> {
  /**
   * Requests a specific navigation item by ID.
   */
  get(id: T['id']): Observable<T>;

  /**
   * Requests the entire top-level navigation tree.
   */
  getTree(): Observable<T>;
}

export const DaffNavigationDriver =
  new InjectionToken<DaffNavigationServiceInterface<any>>('DaffNavigationDriver');
