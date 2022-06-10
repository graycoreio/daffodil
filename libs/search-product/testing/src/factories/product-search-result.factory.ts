import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductKindFactory } from '@daffodil/product/testing';
import {
  DaffSearchProductResult,
  daffTransformProductsToSearchResults,
} from '@daffodil/search-product';

/**
 * Factory for creating {@link DaffSearchProductResult}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchProductResultFactory extends DaffModelFactory<DaffSearchProductResult>{
  constructor(
    private productKindFactory: DaffProductKindFactory,
  ) {
    super();
  }

  create(partial = {}): DaffSearchProductResult {
    return daffTransformProductsToSearchResults(this.productKindFactory.createMany(1))[0];
  }
}
