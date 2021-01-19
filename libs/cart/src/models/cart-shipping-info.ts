import { ID } from '@daffodil/core';

import { DaffCartShippingRate } from './cart-shipping-rate';

export interface DaffCartShippingInformation extends DaffCartShippingRate {
	address_id: ID;
}
