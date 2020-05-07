import { TestBed } from '@angular/core/testing';

import { 
	transformCompositeCartItem,
	transformSimpleCartItem,
	transformConfigurableCartItem
} from './cart-item-input-transformers';
import { 
	DaffCartItemInput, 
	DaffCartItemInputType, 
	DaffCompositeCartItemInput, 
	DaffConfigurableCartItemInput
} from '../../../../models/cart-item-input';
import { MagentoBundledCartItemInput, MagentoCartItemInput, MagentoConfigurableCartItemInput } from '../../models/inputs/cart-item';

describe('Driver | Magento | Cart | Transformers | MagentoCartItemInput', () => {

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
    let transformedCartItem: MagentoBundledCartItemInput;
		let mockDaffCompositeCartItemInput: DaffCompositeCartItemInput;

    beforeEach(() => {
			mockDaffCompositeCartItemInput = {
				...mockDaffCartItemInput,
				type: DaffCartItemInputType.Composite,
				options: [{
					id: 1,
					quantity: 1,
					value: 'value'
				}]
			};
    });
		
    it('should return an object with the correct values', () => {
			transformedCartItem = transformCompositeCartItem(mockDaffCompositeCartItemInput);
      expect(transformedCartItem.input.sku).toEqual(mockDaffCompositeCartItemInput.productId);
      expect(transformedCartItem.input.quantity).toEqual(mockDaffCompositeCartItemInput.qty);
      expect(transformedCartItem.options[0].id).toEqual(Number(mockDaffCompositeCartItemInput.options[0].id));
      expect(transformedCartItem.options[0].quantity).toEqual(mockDaffCompositeCartItemInput.options[0].quantity);
      expect(transformedCartItem.options[0].value).toEqual([mockDaffCompositeCartItemInput.options[0].value]);
		});
		
		it('should return the correct values when options is null', () => {
			mockDaffCompositeCartItemInput.options = null;
			transformedCartItem = transformCompositeCartItem(mockDaffCompositeCartItemInput);
			expect(transformedCartItem.options).toEqual([]);
		});
  });

  describe('transformConfigurableCartItem', () => {
    let transformedCartItem: MagentoConfigurableCartItemInput;
		let mockDaffConfigurableCartItemInput: DaffConfigurableCartItemInput;

    beforeEach(() => {
			mockDaffConfigurableCartItemInput = {
				...mockDaffCartItemInput,
				type: DaffCartItemInputType.Configurable,
				variantId: 'variantId'
			};
    });
		
    it('should return an object with the correct values', () => {
			transformedCartItem = transformConfigurableCartItem(mockDaffConfigurableCartItemInput);
      expect(transformedCartItem.input.sku).toEqual(mockDaffConfigurableCartItemInput.productId);
			expect(transformedCartItem.input.quantity).toEqual(mockDaffConfigurableCartItemInput.qty);
			expect(transformedCartItem.variantSku).toEqual(String(mockDaffConfigurableCartItemInput.variantId));
		});
  });
});
