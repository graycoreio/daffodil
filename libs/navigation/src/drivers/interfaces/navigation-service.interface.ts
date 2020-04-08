import { Observable } from 'rxjs';

import { DaffGenericNavigationTree } from '../../models/generic-navigation-tree';

export interface DaffNavigationServiceInterface<T extends DaffGenericNavigationTree<T>> {
  get(categoryId: string): Observable<T>;
}
