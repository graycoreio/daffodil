import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffUpsellProductsFacadeInterface } from '@daffodil/upsell-products/state';

/**
 * Mocks the {@link DaffUpsellProductsFacadeInterface} for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffUpsellProductsFacade implements DaffUpsellProductsFacadeInterface {
  upsellProducts$: BehaviorSubject<DaffProduct[]>;
  dispatch(action) {};
}
