import { Observable } from 'rxjs';

import { DaffNavigationTreeUnion } from '../../models/navigation-tree-union';

export interface DaffNavigationServiceInterface<T extends DaffNavigationTreeUnion> {
  get(categoryId: string): Observable<T>;
}
