import { Injectable } from '@angular/core';
import { Address } from '../../../../interfaces/models/address';
import { ShippingOption } from '../../models/shipping-option';

@Injectable()
export class ShippingFactory {
  
  createShippingAddress() : MockShippingAddress {
    return {...new MockShippingAddress()};
  }

  createShippingOptions() : ShippingOption[] {
    return [
      new MockShippingOption('1'),
      new MockShippingOption('2')
    ]
  }
}

export class MockShippingAddress implements Address {
  firstname: string = 'first';
  lastname: string = 'last';
  street: string = 'street';
  city: string = 'city';
  state: string = 'state';
  email: string = '';
  postcode: string = 'postcode';
  telephone: string = 'telephone';
}

export class MockShippingOption implements ShippingOption {

  option: string;

  constructor(option:string) {
    this.option = option;
  }
  id: string = 'id' + this.option;
  text: string = 'text' + this.option;
}
