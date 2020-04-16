import { DaffProduct } from './product';

export interface DaffCompositeProductItem {
	id: number;
	required: boolean;
	title: string;
	type: string;
	options: DaffCompositeProductItemOption[];
}

export interface DaffCompositeProductItemOption extends DaffProduct {
	can_change_quantity: boolean;
	id: string;
	name?: string;
	price?: string;
	quantity: number;
}
