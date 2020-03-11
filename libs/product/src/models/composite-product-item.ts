import { DaffProduct } from './product';

export enum DaffPriceTypeEnum {
	fixed = 'FIXED',
	percent = 'PERCENT',
	dynamic = 'DYNAMIC'
}

export enum DaffCompositeProductItemEnum {
	radio = 'RADIO',
	checkbox = 'CHECKBOX',
	select = 'SELECT'
}

export interface DaffCompositeProductItem {
	id: number;
	required: boolean;
	title: string;
	type: DaffCompositeProductItemEnum;
	options: DaffCompositeProductItemOption[];
}

export interface DaffCompositeProductItemOption extends DaffProduct {
	can_change_quantity: boolean;
	name?: string;
	price?: string;
	price_type?: DaffPriceTypeEnum;
	quantity: number;
}
