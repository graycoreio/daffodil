import { MagentoCartItem, MagentoCartItemTypeEnum, MagentoBundleCartItem, MagentoConfigurableCartItem } from '../../../models/outputs/cart-item';
import { DaffCartItem } from '../../../../../models/cart-item';
import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';
import { transformMagentoBundleCartItem } from './bundle-cart-item-transformer';
import { transformMagentoConfigurableCartItem } from './configurable-cart-item-transformer';

/**
 * Transforms the MagentoCartItem into a DaffCartItem. 
 * @param cartItem a MagentoCartItem
 */
export function transformMagentoCartItem(cartItem: MagentoCartItem): DaffCartItem {
	switch(cartItem.__typename) {
		case MagentoCartItemTypeEnum.Bundle:
			return transformMagentoBundleCartItem(<MagentoBundleCartItem>cartItem);
		case MagentoCartItemTypeEnum.Configurable:
			return transformMagentoConfigurableCartItem(<MagentoConfigurableCartItem>cartItem);
		default:
			return transformMagentoSimpleCartItem(cartItem);
	}
}
