import { Injectable } from '@angular/core';

import { MagentoBundledProduct, MagentoBundledProductItem, MagentoBundledProductItemOption } from '../models/bundled-product';
import { DaffMagentoSimpleProductTransformerService } from './simple-product-transformer.service';
import { DaffProductTypeEnum } from '../../../models/product';
import { DaffCompositeProduct } from '../../../models/composite-product';
import { 
	DaffCompositeProductItemOption, 
	DaffCompositeProductItem, 
	DaffCompositeProductItemInputEnum 
} from '../../../models/composite-product-item';

/**
 * Transforms magento products into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoBundledProductTransformerService {

	constructor(private simpleProductTransformer: DaffMagentoSimpleProductTransformerService) {}

  /**
   * Transforms the magento MagentoProduct from the magento product query into a DaffProduct. 
   * @param response the response from a magento product query.
   */
  transform(product: MagentoBundledProduct, mediaUrl: string): DaffCompositeProduct {
    return {
			...this.simpleProductTransformer.transform(product, mediaUrl),
			type: DaffProductTypeEnum.Composite,
			items: product.items.map(this.transformProductItem.bind(this))
    }
	}
	
	transformProductItem(item: MagentoBundledProductItem): DaffCompositeProductItem {
		return {
			id: item.sku,
			required: item.required,
			title: item.title,
			input_type: <DaffCompositeProductItemInputEnum>item.type,
			options: item.options.map(this.transformProductItemOption.bind(this))
		}
	}

	transformProductItemOption(option: MagentoBundledProductItemOption): DaffCompositeProductItemOption {
		return {
			id: option.id.toString(),
			name: option.label,
			price: option.price.toString(),
			quantity: option.quantity
		}
	}
}
