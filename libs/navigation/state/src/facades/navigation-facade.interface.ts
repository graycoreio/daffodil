import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffGenericNavigationTree } from '@daffodil/navigation';

export interface DaffNavigationFacadeInterface<T extends DaffGenericNavigationTree<T>> extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  tree$: Observable<T>;
  errors$: Observable<DaffStateError[]>;
}
