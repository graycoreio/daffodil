import {
  MagentoProduct,
  MagentoSimpleProduct,
} from '@daffodil/product/driver/magento';

export interface MagentoConfigurableProduct extends MagentoProduct {
	configurable_options: MagentoConfigurableProductOption[];
	variants: MagentoConfigurableProductVariant[];
}

export interface MagentoConfigurableProductOption {
	attribute_code:	string;
	label: string;
	position:	number;
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
	value_index: number;
}
