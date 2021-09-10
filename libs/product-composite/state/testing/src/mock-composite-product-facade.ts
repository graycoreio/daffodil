import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { BehaviorSubject } from 'rxjs';

import { DaffPriceRange } from '@daffodil/product';
import {
  DaffCompositeProductItemOption,
  DaffCompositeProduct,
  DaffCompositeProductItem,
  DaffCompositeConfigurationItem,
} from '@daffodil/product-composite';
import { DaffCompositeProductFacadeInterface } from '@daffodil/product-composite/state';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
  getRequiredItemPricesForConfiguration(id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffPriceRange> {
    return new BehaviorSubject(null);
  }
  getOptionalItemPricesForConfiguration(id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffPriceRange> {
    return new BehaviorSubject(null);
  }
  getPricesAsCurrentlyConfigured(id: DaffCompositeProduct['id']): BehaviorSubject<DaffPriceRange> {
    return new BehaviorSubject(null);
  }
  getAppliedOptions(id: DaffCompositeProduct['id']): BehaviorSubject<Dictionary<DaffCompositeProductItemOption>> {
    return new BehaviorSubject({});
  }
  getDiscountAmount(id: DaffCompositeProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  }
  getDiscountPercent(id: DaffCompositeProduct['id']): BehaviorSubject<number> {
    return new BehaviorSubject(null);
  }
  isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): BehaviorSubject<boolean> {
    return new BehaviorSubject(false);
  }
  dispatch(action) {};
  hasDiscount(priceRange: DaffPriceRange): boolean {
    return false;
  };
  hasPriceRange(priceRange: DaffPriceRange): boolean {
    return false;
  };
}
