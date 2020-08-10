import { MagentoBundleCartItemFactory } from '@daffodil/cart/testing';

import { MagentoBundleCartItem } from '../../../models/outputs/cart-item';
import { transformMagentoBundleCartItem } from './bundle-cart-item-transformer';
import { DaffCompositeCartItem } from '../../../../../models/composite-cart-item';

describe('transformMagentoBundleCartItem', () => {
	let stubMagentoBundleCartItem: MagentoBundleCartItem;
	let transformedCartItem: DaffCompositeCartItem;

	beforeEach(() => {
		stubMagentoBundleCartItem = new MagentoBundleCartItemFactory().create();
		transformedCartItem = transformMagentoBundleCartItem(stubMagentoBundleCartItem);
	});
	
	it('should return the expected composite product', () => {
		expect(transformedCartItem.options[0].option_label).toEqual(stubMagentoBundleCartItem.bundle_options[0].label);
		expect(transformedCartItem.options[0].value_label).toEqual(stubMagentoBundleCartItem.bundle_options[0].values[0].label);
	});
});
