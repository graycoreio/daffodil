import { Injectable } from '@angular/core';

import { DaffProduct } from '../../../models/product';
import { MagentoProduct, MagentoProductTypeEnum } from '../models/magento-product';
import { DaffMagentoSimpleProductTransformerService } from './simple-product-transformer.service';
import { DaffMagentoBundledProductTransformerService } from './bundled-product-transformer.service';
import { MagentoBundledProduct } from '../models/bundled-product';

/**
 * Transforms magento products into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductTransformerService {

	constructor(
		private simpleProductTransformer: DaffMagentoSimpleProductTransformerService,
		private bundledProductTransformer: DaffMagentoBundledProductTransformerService
	) {}

  /**
   * Transforms the magento MagentoProduct from the magento product query into a DaffProduct. 
   * @param product a magento product
   */
  transform(product: MagentoProduct, mediaUrl?: string): DaffProduct {
		switch(product.__typename) {
			case MagentoProductTypeEnum.BundledProduct:
				return this.bundledProductTransformer.transform(<MagentoBundledProduct>product, mediaUrl);
			default:
				return this.simpleProductTransformer.transform(product, mediaUrl);
		}
  }

  /**
   * Transforms many magento MagentoProducts from the magento product query into DaffProducts.
   */
  transformMany(products: MagentoProduct[], mediaUrl?: string): DaffProduct[] {
    return products.map(product => this.transform(product, mediaUrl));
  }
}
