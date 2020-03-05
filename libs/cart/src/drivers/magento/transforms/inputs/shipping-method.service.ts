import { Injectable } from '@angular/core';

import { MagentoShippingMethodInput } from '../../models/inputs/shipping-method';
import { DaffCartShippingRate } from '../../../../models/cart-shipping-rate';

@Injectable()
export class DaffMagentoShippingMethodInputTransformer {
  transform(method: Partial<DaffCartShippingRate>): MagentoShippingMethodInput {
    return {
      carrier_code: method.carrier,
      method_code: method.method_code
    }
  }
}
