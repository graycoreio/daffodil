import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { BehaviorSubject } from 'rxjs';

import { DaffConfigurableProductFacadeInterface } from '@daffodil/configurable-product/state';
import {
  DaffConfigurableProduct,
  DaffConfigurableProductVariant,
} from '@daffodil/product';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffConfigurableProductFacade implements DaffConfigurableProductFacadeInterface {
  getAllAttributes(id: DaffConfigurableProduct['id']): BehaviorSubject<Dictionary<string[]>> {
    return new BehaviorSubject({});
  };
  getAllVariants(id: DaffConfigurableProduct['id']): BehaviorSubject<DaffConfigurableProductVariant[]> {
    return new BehaviorSubject([]);
  };
  getAppliedAttributes(id: DaffConfigurableProduct['id']): BehaviorSubject<Dictionary<string>> {
    return new BehaviorSubject({});
  };
  getMinimumPrice(id: DaffConfigurableProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  };
  getMaximumPrice(id: DaffConfigurableProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  };
  getMinimumDiscountedPrice(id: DaffConfigurableProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  };
  getMaximumDiscountedPrice(id: DaffConfigurableProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  };
  getMinimumPercentDiscount(id: DaffConfigurableProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  };
  getMaximumPercentDiscount(id: DaffConfigurableProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  };
  isPriceRanged(id: DaffConfigurableProduct['id']): BehaviorSubject<boolean> {
    return new BehaviorSubject(null);
  };
  hasDiscount(id: DaffConfigurableProduct['id']): BehaviorSubject<boolean> {
    return new BehaviorSubject(null);
  };
  getSelectableAttributes(id: DaffConfigurableProduct['id']): BehaviorSubject<Dictionary<string[]>> {
    return new BehaviorSubject({});
  };
  getMatchingVariants(id: DaffConfigurableProduct['id']): BehaviorSubject<DaffConfigurableProductVariant[]> {
    return new BehaviorSubject([]);
  };
  dispatch(action) {};
}
