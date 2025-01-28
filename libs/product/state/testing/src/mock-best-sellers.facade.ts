import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * @inheritdoc
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`. Deprecated in version 0.81.0. Will be removed in version 0.84.0.
 */
@Injectable({ providedIn: 'root' })
export class MockDaffBestSellersFacade implements DaffStoreFacade<Action> {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  bestSellers$: BehaviorSubject<DaffProduct[]> = new BehaviorSubject([]);

  dispatch(action: Action) {}
}
