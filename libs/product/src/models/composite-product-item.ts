import { DaffProduct } from './product';

export enum DaffCompositeProductItemInputEnum {
	select = 'select',
	radio = 'radio'
}

export interface DaffCompositeProductItem {
	id: number | string;
	required: boolean;
	title: string;
	input_type: DaffCompositeProductItemInputEnum;
	options: DaffCompositeProductItemOption[];
}

export interface DaffCompositeProductItemOption extends DaffProduct {
	id: string;
	name?: string;
	price?: string;
	quantity: number;
}
