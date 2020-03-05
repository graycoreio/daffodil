import { Injectable } from '@angular/core';

import { DaffCartItem } from '../../../../models/cart-item';
import { MagentoCartItemUpdateInput } from '../../models/inputs/cart-item-update';

@Injectable()
export class DaffMagentoCartItemUpdateInputTransformer {
  transform(item: Partial<DaffCartItem>): MagentoCartItemUpdateInput {
    return {
      quantity: item.qty,
      cart_item_id: Number(item.item_id)
    }
  }
}
