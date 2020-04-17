import { DaffProduct } from './product';

export interface DaffCompositeProductItem {
	id: number | string;
	required: boolean;
	title: string;
	input_type: string;
	options: DaffCompositeProductItemOption[];
}

export interface DaffCompositeProductItemOption extends DaffProduct {
	id: string;
	name?: string;
	price?: string;
	quantity: number;
}
