import { Observable } from 'rxjs';

import { DaffNavigationTree } from '../../models/navigation-tree';

export interface DaffNavigationServiceInterface {
  get(categoryId: number): Observable<DaffNavigationTree>;
}
