import { Injectable } from '@angular/core';

import { MagentoCartItemInput } from '../../models/inputs/cart-item';
import { MagentoDaffCartItemInputWithSku } from '../../models/inputs/cart-item-with-sku';

@Injectable()
export class DaffMagentoCartItemInputTransformer {
  transform(item: MagentoDaffCartItemInputWithSku): MagentoCartItemInput {
    return {
      quantity: item.qty,
      sku: item.sku
    }
  }
}
