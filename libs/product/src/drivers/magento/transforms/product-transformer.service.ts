import { Injectable } from '@angular/core';

import { DaffProductUnion } from '../../../models/product-union';
import { ProductNode } from '../models/product-node';

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
    return products.map(this.transformList);
  }

  private transformList(product: ProductNode): DaffProductUnion {
    return {
      id: product.sku,
      url: product.url_key,
      name: product.name,
      images: [
        {url: product.image.url, id: '0', label: product.image.url}
      ]
    }
  }
}
