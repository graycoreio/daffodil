import { DaffProductTypeEnum, DaffProductDiscount } from '../../../models/product';
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
import { MagentoProduct } from '../models/magento-product';

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
		price: getPrice(variant.product),
		discount: getDiscount(variant.product),
		image: {
			id: '0',
			url: variant.product.image.url,
			label: variant.product.image.label
		}
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

/**
 * A function for null checking an object.
 */
function getPrice(product: MagentoProduct): number {
	return product.price_range && 
		product.price_range.maximum_price && 
		product.price_range.maximum_price.regular_price && 
		product.price_range.maximum_price.regular_price.value !== null
	? product.price_range.maximum_price.regular_price.value : null;
}

function getDiscount(product: MagentoProduct): DaffProductDiscount {
	return product.price_range && 
		product.price_range.maximum_price && 
		product.price_range.maximum_price.discount 
		? { 
			amount: product.price_range.maximum_price.discount.amount_off,
			percent: product.price_range.maximum_price.discount.percent_off
		} : { amount: null, percent: null }
}