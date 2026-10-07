import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffCrossSellProductsFacadeInterface } from '@daffodil/cross-sell-products/state';
import { DaffProduct } from '@daffodil/product';

/**
 * Mocks the {@link DaffCrossSellProductsFacadeInterface} for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffCrossSellProductsFacade implements DaffCrossSellProductsFacadeInterface {
  crossSellProducts$ = new BehaviorSubject<DaffProduct[]>([]);
  dispatch(action) {};
}
