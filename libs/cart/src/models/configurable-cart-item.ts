import { DaffCartItem } from './cart-item';
import { DaffCartItemInputType } from './cart-item-input';

export interface DaffConfigurableCartItem extends DaffCartItem {
	type: DaffCartItemInputType.Configurable;
	attributes: DaffConfigurableCartItemAttribute[];
}

export interface DaffConfigurableCartItemAttribute {
	code: string;
	label: string;
	value: DaffConfigurableCartItemAttributeValue;
}

export interface DaffConfigurableCartItemAttributeValue {
	value: string;
	label: string;
}
