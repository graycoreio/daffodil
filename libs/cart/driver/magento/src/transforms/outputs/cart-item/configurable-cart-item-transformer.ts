import { DaffCartItemInputType, DaffConfigurableCartItem, DaffConfigurableCartItemAttribute } from '@daffodil/cart';

import { MagentoConfigurableCartItem } from '../../../models/responses/cart-item';
import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';

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
