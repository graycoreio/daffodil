import { DaffProduct } from './product';

export enum DaffCompositeProductPriceTypeEnum {
	fixed = 'FIXED',
	percent = 'PERCENT',
	dynamic = 'DYNAMIC'
}

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
	price_type?: DaffCompositeProductPriceTypeEnum;
	quantity: number;
}
