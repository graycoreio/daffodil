import { MagentoBundleCartItem } from '../../../models/outputs/cart-item';
import { DaffCartItemInputType } from '../../../../../models/cart-item-input';
import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';
import { DaffCompositeCartItem } from '../../../../../models/composite-cart-item';
import { DaffCompositeCartItemOption } from '../../../../../models/composite-cart-item';

/**
 * Transforms a MagentoBundleCartItem into a DaffCartItem.
 * @param response the response from a magento cart query.
 */
export function transformMagentoBundleCartItem(bundleCartItem: MagentoBundleCartItem): DaffCompositeCartItem {
	return bundleCartItem ? {
		...transformMagentoSimpleCartItem(bundleCartItem),
		type: DaffCartItemInputType.Composite,
		options: bundleCartItem.bundle_options.map(transformBundleCartItemOption)
	} : null
}

function transformBundleCartItemOption(option: MagentoBundleCartItem['bundle_options'][0]): DaffCompositeCartItemOption {
	return {
		option_label: option.label,
		value_label: option.values[0].label
	}
}
