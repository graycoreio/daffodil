import { DaffProductTypeEnum } from '../../../models/product';
import { transformMagentoSimpleProduct } from './simple-product-transformers';
import { 
	MagentoConfigurableProduct, 
	MagentoConfigurableProductOption, 
	MagentoConfigurableProductOptionsValue, 
	MagentoConfigurableProductVariant, 
	MagentoConfigurableAttributeOption
} from '../models/configurable-product';
import { 
	DaffConfigurableProduct,
	DaffConfigurableProductAttribute,
	DaffConfigurableProductOptionValue,
	DaffConfigurableProductVariant,
	DaffProductVariantAttributesDictionary
} from '../../../models/configurable-product';
import { MagentoProductStockStatusEnum } from '../models/magento-product';
import { getDiscount, getDiscountedPrice, getPrice } from '../helpers/null-checkers';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct. 
 * @param response the response from a magento product query.
 */
export function transformMagentoConfigurableProduct(product: MagentoConfigurableProduct, mediaUrl: string): DaffConfigurableProduct {
	return {
		...transformMagentoSimpleProduct(product, mediaUrl),
		type: DaffProductTypeEnum.Configurable,
		configurableAttributes: product.configurable_options.map(transformOption),
		variants: product.variants.map(transformVariant)
	}
}

export function transformOption(option: MagentoConfigurableProductOption): DaffConfigurableProductAttribute {
	return {
		order: option.position,
		code: option.attribute_code,
		label: option.label,
		values: option.values.map(transformOptionValue)
	}
}

export function transformOptionValue(value: MagentoConfigurableProductOptionsValue): DaffConfigurableProductOptionValue {
	return {
		value: value.value_index.toString(),
		label: value.label
	}
}

export function transformVariant(variant: MagentoConfigurableProductVariant): DaffConfigurableProductVariant {
	return {
		id: variant.product.sku,
		appliedAttributes: transformVariantAttributes(variant.attributes),
		price: {
			originalPrice: getPrice(variant.product),
			discount: getDiscount(variant.product),
			discountedPrice: getDiscountedPrice(variant.product)
		},
		image: {
			id: '0',
			url: variant.product.image.url,
			label: variant.product.image.label
		},
		in_stock: variant.product.stock_status === MagentoProductStockStatusEnum.InStock
	}
}

export function transformVariantAttributes(attributes: MagentoConfigurableAttributeOption[]): DaffProductVariantAttributesDictionary {
	let appliedAttributes: DaffProductVariantAttributesDictionary = {};
	attributes.forEach(attribute => {
		appliedAttributes = {
			...appliedAttributes,
			[attribute.code]: attribute.value_index.toString()
		}
	});

	return appliedAttributes;
}
