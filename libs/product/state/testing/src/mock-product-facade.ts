import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductFacadeInterface } from '@daffodil/product/state';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffProductFacade implements DaffProductFacadeInterface {
  /**
   * @deprecated use product page facade instead. Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  /**
   * @deprecated use getProduct instead. Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  product$: BehaviorSubject<DaffProduct> = new BehaviorSubject(null);
  getProduct(id: DaffProduct['id']): BehaviorSubject<DaffProduct> {
    return new BehaviorSubject(null);
  }
  getPrice(id: DaffProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  }
  hasDiscount(id: DaffProduct['id']): BehaviorSubject<boolean> {
    return new BehaviorSubject(false);
  }
  getDiscountAmount(id: DaffProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  }
  getDiscountedPrice(id: DaffProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  }
  getDiscountPercent(id: DaffProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  }
  isOutOfStock(id: DaffProduct['id']): BehaviorSubject<boolean> {
    return new BehaviorSubject(false);
  }
  dispatch(action) {};
}
