import {
  DaffCartItem,
  DaffCartItemInput,
  DaffCartItemInputType,
} from '@daffodil/cart';

import { daffCartItemInputToItemTransform } from './input-to-item-transform';

describe('@daffodil/cart | daffCartItemInputToItemTransform', () => {
  let cartItemInput: DaffCartItemInput;
  let result: DaffCartItem;

  beforeEach(() => {
    cartItemInput = {
      type: DaffCartItemInputType.Simple,
      qty: 2,
      productId: 'productId',
    };
    result = daffCartItemInputToItemTransform(cartItemInput);
  });

  it('should set type', () => {
    expect(result.type).toEqual(cartItemInput.type);
  });

  it('should set product ID', () => {
    expect(result.product_id).toEqual(cartItemInput.productId);
  });

  it('should set qty', () => {
    expect(result.qty).toEqual(cartItemInput.qty);
  });
});
