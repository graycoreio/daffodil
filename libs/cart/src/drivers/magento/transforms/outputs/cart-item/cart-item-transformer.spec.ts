import { TestBed } from '@angular/core/testing';

import { 
	MagentoCartItemFactory, 
	MagentoBundleCartItemFactory,
	MagentoConfigurableCartItemFactory
} from '@daffodil/cart/testing';

import { MagentoCartItem, MagentoBundleCartItem, MagentoConfigurableCartItem } from '../../../models/outputs/cart-item';
import { transformMagentoCartItem } from './cart-item-transformer';
import { DaffCartItemInputType } from '../../../../../models/cart-item-input';

describe('transformMagentoCartItem', () => {
	let stubMagentoCartItems: MagentoCartItem[];

	beforeEach(() => {
		stubMagentoCartItems = new MagentoCartItemFactory().createMany(2);
  });
	
	describe('when the product is a simple product', () => {

		it('should return a simple product', () => {
			expect(transformMagentoCartItem(stubMagentoCartItems[0]).type).toEqual(DaffCartItemInputType.Simple);
		});
	});

	describe('when the product is a bundled product', () => {
		let magentoBundledCartItem: MagentoBundleCartItem;

		beforeEach(() => {
			magentoBundledCartItem = new MagentoBundleCartItemFactory().create();
		});

		it('should return a composite product', () => {
			expect(transformMagentoCartItem(magentoBundledCartItem).type).toEqual(DaffCartItemInputType.Composite);
		});
	});

	describe('when the product is a configurable product', () => {
		let magentoConfigurableCartItem: MagentoConfigurableCartItem;

		beforeEach(() => {
			magentoConfigurableCartItem = new MagentoConfigurableCartItemFactory().create();
		});

		it('should return a configurable product', () => {
			expect(transformMagentoCartItem(magentoConfigurableCartItem).type).toEqual(DaffCartItemInputType.Configurable);
		});
	});
});
