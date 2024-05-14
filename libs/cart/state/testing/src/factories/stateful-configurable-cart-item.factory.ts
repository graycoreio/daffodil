import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffConfigurableCartItem } from '@daffodil/cart';
import { DaffMockConfigurableCartItem } from '@daffodil/cart/testing';
import {
  DaffOperationEntity,
  DaffState,
} from '@daffodil/core/state';
import { DaffModelFactory } from '@daffodil/core/testing';

export class DaffMockStatefulConfigurableCartItem extends DaffMockConfigurableCartItem implements DaffOperationEntity<DaffConfigurableCartItem> {
  daffState = DaffState.Stable;
  daffErrors = [];
  daffTemp = false;
}

@Injectable({
  providedIn: 'root',
})
export class DaffStatefulConfigurableCartItemFactory extends DaffModelFactory<DaffOperationEntity<DaffConfigurableCartItem>> {
  constructor() {
    super(DaffMockStatefulConfigurableCartItem);
  }
}
