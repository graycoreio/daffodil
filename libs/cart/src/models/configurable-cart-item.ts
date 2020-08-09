import { DaffCartItem } from './cart-item';
import { DaffCartItemInputType } from './cart-item-input';

export interface DaffConfigurableCartItem extends DaffCartItem {
	type: DaffCartItemInputType.Configurable;
	attributes: DaffConfigurableCartItemAttribute[];
}

export interface DaffConfigurableCartItemAttribute {
	attribute_label: string;
	value_label: string;
}
