import { DaffSortable } from '@daffodil/core';

import { DaffProduct } from './product';

export interface DaffConfigurableProduct extends DaffProduct {
	configurableOptions: DaffConfigurableProductOption[];
	variants?: DaffConfigurableProductVariant[];
}

export interface DaffConfigurableProductOption extends DaffSortable {
	code:	string;
	label: string;
	values:	DaffConfigurableProductOptionValue[];
}

export interface DaffConfigurableProductVariant {
	appliedAttributes: DaffProductVariantAttributesDictionary;
	product: DaffProduct;
}

export interface DaffProductVariantAttributesDictionary {
	[x: string]:  DaffConfigurableProductOptionValue['value'];
}

export interface DaffConfigurableProductOptionValue {
	value: string;
	label: string;
	swatch?: DaffSwatchOption;
}

export interface DaffSwatchOption {
	value: string;
	thumbnail: string;
}
