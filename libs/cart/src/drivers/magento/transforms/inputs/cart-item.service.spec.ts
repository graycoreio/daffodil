import { TestBed } from '@angular/core/testing';

import { DaffMagentoCartItemInputTransformer } from './cart-item.service';

describe('Driver | Magento | Cart | Transformer | MagentoCartItemInput', () => {
  let service: DaffMagentoCartItemInputTransformer;

  let mockDaffCartItemInput;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartItemInputTransformer
      ]
    });

    service = TestBed.get(DaffMagentoCartItemInputTransformer);

    mockDaffCartItemInput = {
      productId: '3',
      qty: 2,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart item input', () => {
    let transformedCartItem;
    let qty;

    beforeEach(() => {
      qty = 4;

      mockDaffCartItemInput.qty = qty;

      transformedCartItem = service.transform(mockDaffCartItemInput);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartItem.quantity).toEqual(qty);
    });
  });
});
