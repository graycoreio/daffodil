import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffConfigurableCartItem, DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockCartItem } from './cart-item.factory';

export class MockConfigurableCartItem extends MockCartItem implements DaffConfigurableCartItem {
	type = DaffCartItemInputType.Configurable;
	attributes = [
		{
			attribute_label: 'Color',
			value_label: 'Red'
		},
		{
			attribute_label: 'Size',
			value_label: 'M'
		}
	];
}

@Injectable({
  providedIn: 'root'
})
export class DaffConfigurableCartItemFactory extends DaffModelFactory<DaffConfigurableCartItem> {

  constructor(){
    super(MockConfigurableCartItem);
  }
}
