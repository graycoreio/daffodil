import { Injectable } from '@angular/core';

import { DaffCartItem } from '@daffodil/cart';

import { MagentoCartItemUpdateInput } from '../../models/requests/cart-item-update';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartItemUpdateInputTransformer {
  transform(item: Partial<DaffCartItem>): MagentoCartItemUpdateInput {
    return {
      quantity: item.qty,
      cart_item_id: Number(item.item_id)
    }
  }
}
