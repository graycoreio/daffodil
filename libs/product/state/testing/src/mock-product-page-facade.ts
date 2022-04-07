import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductPageFacadeInterface } from '@daffodil/product/state';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffProductPageFacade implements DaffProductPageFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  product$: BehaviorSubject<DaffProduct> = new BehaviorSubject(null);
  dispatch(action) {};
}
