import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffRelatedProductsFacadeInterface } from '@daffodil/related-products/state';

/**
 * Mocks the {@link DaffRelatedProductsFacadeInterface} for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffRelatedProductsFacade implements DaffRelatedProductsFacadeInterface {
  relatedProducts$: BehaviorSubject<DaffProduct[]>;
  dispatch(action) {};
}
