import { Injectable } from '@angular/core';

import { DaffProductUnion } from '../../../models/product-union';
import { DaffProductTransformerInterface } from '../../interfaces/product-transformer.interface';
import { ProductNode } from '../models/product-node';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductTransformerService implements DaffProductTransformerInterface<DaffProductUnion> {

  transform(response: any): DaffProductUnion {
    const product: ProductNode = response.products.items[0];
    return {
      id: product.sku,
      url: product.url_key,
      name: product.name,
      images: [
        { url: product.image.url, id: "0", label: product.image.label},
        ...product.media_gallery_entries.map(image => {
          return {
            url: response.storeConfig.secure_base_media_url + "catalog/product" + image.file,
            label: image.label,
            id: image.id
          }
        })
      ],
      description: product.description.html
    }
  }

  transformMany(products: any[]): DaffProductUnion[] {
    return products.map(this.transformList);
  }

  private transformList(product: ProductNode): DaffProductUnion {
    return {
      id: product.sku,
      url: product.url_key,
      name: product.name,
      images: [
        {url: product.image.url, id: "0", label: product.image.url}
      ]
    }
  }
}
