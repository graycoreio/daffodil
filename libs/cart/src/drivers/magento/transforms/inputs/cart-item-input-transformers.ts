import { MagentoCartItemInput, MagentoBundledCartItemInput, MagentoBundledCartItemOption } from '../../models/inputs/cart-item';
import { DaffCartItemInput, DaffCompositeCartItemInput, DaffCompositeCartItemOption } from '../../../../models/cart-item-input';

export function transformCompositeCartItem(item: DaffCompositeCartItemInput): MagentoBundledCartItemInput {
	return {
		input: transformSimpleCartItem(item),
		options: item.options ? item.options.map(transformCompositeCartItemOption) : []
	}
}

export function transformSimpleCartItem(item: DaffCartItemInput): MagentoCartItemInput {
	return {
		quantity: item.qty,
		sku: item.productId
	}
}

function transformCompositeCartItemOption(option: DaffCompositeCartItemOption): MagentoBundledCartItemOption {
	return {
		id: Number(option.id),
		quantity: option.quantity,
		value: [option.value]
	}
}
