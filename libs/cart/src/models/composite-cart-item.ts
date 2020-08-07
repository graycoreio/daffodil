import { DaffCartItem } from './cart-item';
import { DaffCartItemInputType } from './cart-item-input';

export interface DaffCompositeCartItem extends DaffCartItem {
	type: DaffCartItemInputType.Composite;
	options: DaffCompositeCartItemOption[];
}

export interface DaffCompositeCartItemOption {
	option_label: string;
	value_label: string;
}
