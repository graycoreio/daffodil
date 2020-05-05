import { DaffProduct } from './product';

export interface DaffConfigurableProduct extends DaffProduct {
	configurableOptions: DaffConfigurableProductOption[];
	variants?: DaffConfigurableProductVariant[];
}

export interface DaffConfigurableProductOption {
	code:	string;
	id:	number;
	label: string;
	values:	DaffConfigurableProductOptionValue[];
}

export interface DaffSwatchOption {
	value: string;
	thumbnail: string;
}

export interface DaffConfigurableProductVariant {
	appliedAttributes: DaffConfigurableProductOptionValue[];
	product: DaffProduct;
}

export interface DaffConfigurableProductOptionValue {
	value: string;
	label: string;
	swatch?: DaffSwatchOption;
}
