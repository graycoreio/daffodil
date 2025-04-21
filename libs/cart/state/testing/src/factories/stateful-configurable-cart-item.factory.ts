import { Injectable } from '@angular/core';

import { DaffConfigurableCartItem } from '@daffodil/cart';
import { DaffMockConfigurableCartItem } from '@daffodil/cart/testing';
import {
  DaffOperationEntity,
  DaffState,
} from '@daffodil/core/state';
import { DaffModelFactory } from '@daffodil/core/testing';

// TODO: rename to have Mock first
/**
 * @role mock
 */
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
