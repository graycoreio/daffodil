import { Injectable } from '@angular/core';

import { DaffCartShippingRate } from '@daffodil/cart';

import { MagentoShippingMethodInput } from '../../models/requests/shipping-method';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoShippingMethodInputTransformer {
  transform(method: Partial<DaffCartShippingRate>): MagentoShippingMethodInput {
    return {
      carrier_code: method.carrier,
      method_code: method.method_code
    }
  }
}
