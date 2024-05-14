import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCompositeCartItem } from '@daffodil/cart';
import { DaffMockCompositeCartItem } from '@daffodil/cart/testing';
import {
  DaffOperationEntity,
  DaffState,
} from '@daffodil/core/state';
import { DaffModelFactory } from '@daffodil/core/testing';

export class DaffMockStatefulCompositeCartItem extends DaffMockCompositeCartItem implements DaffOperationEntity<DaffCompositeCartItem> {
  daffState = DaffState.Stable;
  daffErrors = [];
  daffTemp = false;
}

@Injectable({
  providedIn: 'root',
})
export class DaffStatefulCompositeCartItemFactory extends DaffModelFactory<DaffOperationEntity<DaffCompositeCartItem>> {
  constructor() {
    super(DaffMockStatefulCompositeCartItem);
  }
}
