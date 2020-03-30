import { Observable } from 'rxjs';

import { DaffNavigationTree } from '../../models/navigation-tree';

export interface DaffNavigationServiceInterface<T extends DaffNavigationTree<T>> {
  get(categoryId: string): Observable<T>;
}
