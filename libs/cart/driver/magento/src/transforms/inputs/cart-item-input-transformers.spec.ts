import { TestBed } from '@angular/core/testing';

import {
  DaffCartItemInput,
  DaffCartItemInputType,
  DaffCompositeCartItemInput,
  DaffConfigurableCartItemInput,
} from '@daffodil/cart';
import { MagentoCartItemInput } from '@daffodil/cart/driver/magento';

import {
  transformCompositeCartItem,
  transformSimpleCartItem,
  transformConfigurableCartItem,
} from './cart-item-input-transformers';

describe('@daffodil/cart/driver/magento | Transformers | MagentoCartItemInput', () => {

  let mockDaffCartItemInput: DaffCartItemInput;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    mockDaffCartItemInput = {
      type: DaffCartItemInputType.Simple,
      productId: '3',
      qty: 2,
    };
  });

  describe('transformSimpleCartItem', () => {
    let transformedCartItem: MagentoCartItemInput;

    beforeEach(() => {
      transformedCartItem = transformSimpleCartItem(mockDaffCartItemInput);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartItem.sku).toEqual(mockDaffCartItemInput.productId);
      expect(transformedCartItem.quantity).toEqual(mockDaffCartItemInput.qty);
    });
  });

  describe('transformCompositeCartItem', () => {
    let transformedCartItem: MagentoCartItemInput;
    let mockDaffCompositeCartItemInput: DaffCompositeCartItemInput;

    beforeEach(() => {
      mockDaffCompositeCartItemInput = {
        ...mockDaffCartItemInput,
        type: DaffCartItemInputType.Composite,
        options: [{
          code: 1,
          quantity: 1,
          value: 'value',
        }],
      };
    });

    it('should return an object with the correct values', () => {
      transformedCartItem = transformCompositeCartItem(mockDaffCompositeCartItemInput);
      expect(transformedCartItem.sku).toEqual(mockDaffCompositeCartItemInput.productId);
      expect(transformedCartItem.quantity).toEqual(mockDaffCompositeCartItemInput.qty);
      expect(transformedCartItem.selected_options).toContain(mockDaffCompositeCartItemInput.options[0].value);
    });

    it('should return the correct values when options is null', () => {
      mockDaffCompositeCartItemInput.options = null;
      transformedCartItem = transformCompositeCartItem(mockDaffCompositeCartItemInput);
      expect(transformedCartItem.selected_options).toEqual([]);
    });
  });

  describe('transformConfigurableCartItem', () => {
    let transformedCartItem: MagentoCartItemInput;
    let mockDaffConfigurableCartItemInput: DaffConfigurableCartItemInput;

    beforeEach(() => {
      mockDaffConfigurableCartItemInput = {
        ...mockDaffCartItemInput,
        type: DaffCartItemInputType.Configurable,
        variantId: 'variantId',
      };
    });

    it('should return an object with the correct values', () => {
      transformedCartItem = transformConfigurableCartItem(mockDaffConfigurableCartItemInput);
      expect(transformedCartItem.parent_sku).toEqual(mockDaffConfigurableCartItemInput.productId);
      expect(transformedCartItem.quantity).toEqual(mockDaffConfigurableCartItemInput.qty);
      expect(transformedCartItem.sku).toEqual(mockDaffConfigurableCartItemInput.variantId);
    });
  });
});
