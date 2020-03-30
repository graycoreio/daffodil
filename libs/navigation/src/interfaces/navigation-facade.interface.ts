import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffNavigationTree } from '../models/navigation-tree';

export interface DaffNavigationFacadeInterface<T extends DaffNavigationTree<T>> extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  tree$: Observable<T>;
  errors$: Observable<string[]>;
  dispatch(action: Action): void;
}