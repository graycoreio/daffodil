import { Injectable } from '@angular/core';
import { DaffProductUnion } from '../../../models/product';
import { DaffProductTransformerInterface } from '../../interfaces/product-transformer.interface';

@Injectable({
  providedIn: 'root'
})
export class MagentoProductTransformerService implements DaffProductTransformerInterface {

  transform(product: any): DaffProductUnion {
    return {
      id: product.sku,
      name: product.name
    }
  }

  transformMany(products: any[]): DaffProductUnion[] {
    return products.map(this.transform);
  }
}
