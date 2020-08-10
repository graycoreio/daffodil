import { MagentoCartItemInput, MagentoBundledCartItemInput, MagentoBundledCartItemOption, MagentoConfigurableCartItemInput } from '../../models/inputs/cart-item';
import { DaffCartItemInput, DaffCompositeCartItemInput, DaffCompositeCartItemInputOption, DaffConfigurableCartItemInput } from '../../../../models/cart-item-input';

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

export function transformConfigurableCartItem(item: DaffConfigurableCartItemInput): MagentoConfigurableCartItemInput {
	return {
		parentSku: item.productId,
		data: {
			quantity: item.qty,
			sku: String(item.variantId)
		},
	}
}

function transformCompositeCartItemOption(option: DaffCompositeCartItemInputOption): MagentoBundledCartItemOption {
	return {
		id: Number(option.code),
		quantity: option.quantity,
		value: [option.value]
	}
}
