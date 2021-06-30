import { ID } from '@daffodil/core';

import { DaffCartShippingRate } from './cart-shipping-rate';

// TODO: pretty sure this shouldn't even exist
export interface DaffCartShippingInformation extends DaffCartShippingRate {
	address_id: ID;
}
