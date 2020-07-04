import { MagentoBundledProduct, MagentoBundledProductItem, MagentoBundledProductItemOption } from '../models/bundled-product';
import { DaffProductTypeEnum } from '../../../models/product';
import { DaffCompositeProduct } from '../../../models/composite-product';
import { 
	DaffCompositeProductItemOption, 
	DaffCompositeProductItem, 
	DaffCompositeProductItemInputEnum 
} from '../../../models/composite-product-item';
import { transformMagentoSimpleProduct } from './simple-product-transformers';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct. 
 * @param response the response from a magento product query.
 */
export function transformMagentoBundledProduct(product: MagentoBundledProduct, mediaUrl: string): DaffCompositeProduct {
	return {
		...transformMagentoSimpleProduct(product, mediaUrl),
		type: DaffProductTypeEnum.Composite,
		items: product.items.map(transformMagentoBundledProductItem)
	}
}

function transformMagentoBundledProductItem(item: MagentoBundledProductItem): DaffCompositeProductItem {
	return {
		id: item.sku,
		required: item.required,
		title: item.title,
		input_type: <DaffCompositeProductItemInputEnum>item.type,
		options: item.options.map(transformMagentoBundledProductItemOption)
	}
}

function transformMagentoBundledProductItemOption(option: MagentoBundledProductItemOption): DaffCompositeProductItemOption {
	return {
		id: option.id.toString(),
		name: option.label,
		price: option.price,
		quantity: option.quantity,
		is_default: option.is_default
	}
}
