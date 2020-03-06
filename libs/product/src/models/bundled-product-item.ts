import { DaffProduct } from './product';

export enum DaffPriceTypeEnum {
	fixed = 'FIXED',
	percent = 'PERCENT',
	dynamic = 'DYNAMIC'
}

export enum DaffBundledProductItemType {
	radio = 'RADIO',
	checkbox = 'CHECKBOX',
	select = 'SELECT'
}

export interface DaffBundledProductItem {
	bundle_id: string;
	bundle_option_id: number;
	required: boolean;
	title: string;
	type: DaffBundledProductItemType;
	options: DaffBundledProductItemOption[];
}

export interface DaffBundledProductItemOption extends DaffProduct {
	can_change_quantity: boolean;
	name?: string;
	price?: string;
	price_type?: DaffPriceTypeEnum;
	quantity: number;
}
