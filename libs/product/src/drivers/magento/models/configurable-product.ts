import { MagentoProduct } from './magento-product';
import { MagentoSimpleProduct } from './simple-product';

export interface MagentoConfigurableProduct extends MagentoProduct {
	configurable_options: MagentoConfigurableProductOption[];
	variants: MagentoConfigurableProductVariant[];
}

export interface MagentoConfigurableProductOption {
	attribute_code:	string;
	attribute_id:	string;
	id:	number;
	label: string;
	position:	number;
	product_id:	number;
	values:	MagentoConfigurableProductOptionsValue[];
}

export interface MagentoConfigurableProductOptionsValue {
	label: string;
	swatch_data?: MagentoSwatchDataInterface;
	value_index: number;
}

export interface MagentoSwatchDataInterface {
	value: string;
	thumbnail: string;
}

export interface MagentoConfigurableProductVariant {
	attributes: MagentoConfigurableAttributeOption[];
	product: MagentoSimpleProduct;
}

export interface MagentoConfigurableAttributeOption {
	code:	string;
	label: string;
	value_index: number;
}
