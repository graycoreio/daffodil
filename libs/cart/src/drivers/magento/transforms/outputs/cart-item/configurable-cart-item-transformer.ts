import { MagentoConfigurableCartItem } from '../../../models/outputs/cart-item';
import { DaffCartItemInputType } from '../../../../../models/cart-item-input';
import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';
import { DaffConfigurableCartItemAttribute, DaffConfigurableCartItem } from '../../../../../models/configurable-cart-item';

/**
 * Transforms a MagentoConfigurableCartItem into a DaffCartItem.
 * @param response the response from a magento cart query.
 */
export function transformMagentoConfigurableCartItem(configurableCartItem: MagentoConfigurableCartItem): DaffConfigurableCartItem {
	return configurableCartItem ? {
		...transformMagentoSimpleCartItem(configurableCartItem),
		type: DaffCartItemInputType.Configurable,
		attributes: configurableCartItem.configurable_options.map(transformConfigurableCartItemAttribute)
	} : null
}

function transformConfigurableCartItemAttribute(option: MagentoConfigurableCartItem['configurable_options'][0]): DaffConfigurableCartItemAttribute {
	return {
		attribute_label: option.option_label,
		value_label: option.value_label
	}
}
