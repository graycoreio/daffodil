import { Injectable } from '@angular/core';

import { ShippingOption } from '@daffodil/checkout';
import { DaffModelFactory } from "@daffodil/core/testing";

import * as faker from 'faker/locale/en_US';

export class MockShippingOption implements ShippingOption {
  id = faker.random.number().toString();
  text = faker.company.companyName() + " " + faker.commerce.productAdjective() + " Shipping"
}

@Injectable({
  providedIn: 'root'
})
export class DaffShippingOptionFactory extends DaffModelFactory<ShippingOption>{
  constructor(){
    super(MockShippingOption);
  }
}