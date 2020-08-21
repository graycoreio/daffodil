import { DaffSortable } from '@daffodil/core';

import { DaffProduct, DaffProductDiscount, DaffProductStockEnum } from './product';
import { DaffProductImage } from './product-image';

export interface DaffConfigurableProduct extends DaffProduct {
	configurableAttributes: DaffConfigurableProductAttribute[];
	variants: DaffConfigurableProductVariant[];
}

export interface DaffConfigurableProductAttribute extends DaffSortable {
	code:	string;
	label: string;
	values:	DaffConfigurableProductOptionValue[];
}

export interface DaffConfigurableProductVariant {
	appliedAttributes: DaffProductVariantAttributesDictionary;
	id: string;
	price: number;
	discount: DaffProductDiscount;
	image?: DaffProductImage;
	stock_status: DaffProductStockEnum;
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
	thumbnail?: string;
}
