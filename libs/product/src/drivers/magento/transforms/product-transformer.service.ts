import { Injectable } from '@angular/core';

import { DaffProductUnion } from '../../../models/product-union';
import { ProductNode, MagentoProductTypeEnum } from '../models/product-node';
import { DaffProductTypeEnum } from 'libs/product/src/models/product';

/**
 * Transforms magento products into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductTransformerService {

  /**
   * Transforms the magento ProductNode from the magento product query into a DaffProductUnion. 
   * @param response the response from a magento product query.
   */
  transform(response: any): DaffProductUnion {
    const product: ProductNode = response.products.items[0];
    return {
			__typename: this.transformProductType(product.__typename),
			id: product.sku,
      url: product.url_key,
      name: product.name,
      images: [
        { url: product.image.url, id: '0', label: product.image.label},
        ...product.media_gallery_entries.map(image => {
          return {
            url: response.storeConfig.secure_base_media_url + 'catalog/product' + image.file,
            label: image.label,
            id: image.id.toString()
          }
        })
      ],
      description: product.description.html
    }
  }

  /**
   * Transforms many magento ProductNodes from the magento product query into DaffProductUnions.
   */
  transformMany(products: any[]): DaffProductUnion[] {
    return products.map(this.transformList.bind(this));
  }

  private transformList(product: ProductNode): DaffProductUnion {
    return {
			__typename: this.transformProductType(product.__typename),
      id: product.sku,
      url: product.url_key,
      name: product.name,
      images: [
        {url: product.image.url, id: '0', label: product.image.url}
      ]
    }
	}
	
	private transformProductType(type: string): DaffProductTypeEnum {
		switch(type) {
			case(MagentoProductTypeEnum.BundledProduct) :
				return DaffProductTypeEnum.Composite;
			case(MagentoProductTypeEnum.SimpleProduct) : 
				return DaffProductTypeEnum.Simple;
			default :
				return null;
		}
	}
}
