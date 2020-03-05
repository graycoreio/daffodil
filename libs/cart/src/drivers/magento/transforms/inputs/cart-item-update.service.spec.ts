import { TestBed } from '@angular/core/testing';

import { DaffCartItemFactory } from '@daffodil/cart/testing';

import { DaffMagentoCartItemUpdateInputTransformer } from './cart-item-update.service';

describe('Driver | Magento | Cart | Transformer | MagentoCartItemUpdateInput', () => {
  let service: DaffMagentoCartItemUpdateInputTransformer;

  let daffCartItemFactory: DaffCartItemFactory;

  let mockDaffCartItemUpdateInput;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartItemUpdateInputTransformer
      ]
    });

    service = TestBed.get(DaffMagentoCartItemUpdateInputTransformer);

    daffCartItemFactory = TestBed.get(DaffCartItemFactory);

    mockDaffCartItemUpdateInput = daffCartItemFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart item input', () => {
    let transformedCartItem;
    let qty;

    beforeEach(() => {
      qty = 4;

      mockDaffCartItemUpdateInput.qty = qty;

      transformedCartItem = service.transform(mockDaffCartItemUpdateInput);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartItem.quantity).toEqual(qty);
    });
  });
});
