import { MagentoConfigurableCartItemFactory } from '@daffodil/cart/testing';

import { MagentoConfigurableCartItem } from '../../../models/outputs/cart-item';
import { transformMagentoConfigurableCartItem } from './configurable-cart-item-transformer';
import { DaffConfigurableCartItem } from '../../../../../models/configurable-cart-item';

describe('transformMagentoConfigurableCartItem', () => {
	let stubMagentoConfigurableCartItem: MagentoConfigurableCartItem;
	let transformedCartItem: DaffConfigurableCartItem;

	beforeEach(() => {
		stubMagentoConfigurableCartItem = new MagentoConfigurableCartItemFactory().create();
		transformedCartItem = transformMagentoConfigurableCartItem(stubMagentoConfigurableCartItem);
	});
	
	it('should return the expected composite product', () => {
		expect(transformedCartItem.attributes[0].attribute_label).toEqual(stubMagentoConfigurableCartItem.configurable_options[0].option_label);
		expect(transformedCartItem.attributes[0].value_label).toEqual(stubMagentoConfigurableCartItem.configurable_options[0].value_label);
	});
});
