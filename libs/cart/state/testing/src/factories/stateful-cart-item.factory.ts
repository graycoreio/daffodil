import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCartItem } from '@daffodil/cart';
import { DaffMockCartItem } from '@daffodil/cart/testing';
import {
  DaffOperationEntity,
  DaffState,
} from '@daffodil/core/state';
import { DaffModelFactory } from '@daffodil/core/testing';

export class DaffMockStatefulCartItem extends DaffMockCartItem implements DaffOperationEntity<DaffCartItem> {
  daffState = DaffState.Stable;
  daffErrors = [];
  daffTemp = false;
}

@Injectable({
  providedIn: 'root',
})
export class DaffStatefulCartItemFactory extends DaffModelFactory<DaffOperationEntity<DaffCartItem>> {
  constructor() {
    super(DaffMockStatefulCartItem);
  }
}
