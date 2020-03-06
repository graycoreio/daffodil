import { Injectable } from '@angular/core';

import { MagentoCartItemInput } from '../../models/inputs/cart-item';
import { DaffCartItemInput } from '../../../../models/cart-item-input';

@Injectable()
export class DaffMagentoCartItemInputTransformer {
  transform(item: DaffCartItemInput): MagentoCartItemInput {
    return {
      quantity: item.qty,
      sku: item.productId
    }
  }
}
