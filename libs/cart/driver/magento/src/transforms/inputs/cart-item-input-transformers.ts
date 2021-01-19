import { DaffCartItemInput, DaffCompositeCartItemInput, DaffCompositeCartItemInputOption, DaffConfigurableCartItemInput } from '@daffodil/cart';

import { MagentoCartItemInput, MagentoBundledCartItemInput, MagentoBundledCartItemOption, MagentoConfigurableCartItemInput } from '../../models/requests/cart-item';

export function transformCompositeCartItem(item: DaffCompositeCartItemInput): MagentoBundledCartItemInput {
	return {
		input: transformSimpleCartItem(item),
		options: item.options ? item.options.map(transformCompositeCartItemOption) : []
	}
}

export function transformSimpleCartItem(item: DaffCartItemInput): MagentoCartItemInput {
	return {
		quantity: item.qty,
		sku: String(item.productId)
	}
}

export function transformConfigurableCartItem(item: DaffConfigurableCartItemInput): MagentoConfigurableCartItemInput {
	return {
		parentSku: String(item.productId),
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
