import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductPageFacadeInterface } from '@daffodil/product/state';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffProductPageFacade implements DaffProductPageFacadeInterface {
  loadingState$ = new BehaviorSubject<DaffState>(DaffState.Stable);
  loading$ = new BehaviorSubject<boolean>(false);
  mutating$ = new BehaviorSubject<boolean>(false);
  resolving$ = new BehaviorSubject<boolean>(false);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);
  hasErrors$ = new BehaviorSubject<boolean>(false);
  product$ = new BehaviorSubject<DaffProduct>(null);

  dispatch(action) {};
}
