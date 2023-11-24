import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCartShippingInformation } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

import { MockCartShippingRate } from './cart-shipping-rate.factory';

export class MockCartShippingInformation extends MockCartShippingRate implements DaffCartShippingInformation {
  address_id = faker.datatype.uuid();
}

@Injectable({
  providedIn: 'root',
})
export class DaffCartShippingInformationFactory extends DaffModelFactory<DaffCartShippingInformation>{
  constructor(){
    super(MockCartShippingInformation);
  }
}
