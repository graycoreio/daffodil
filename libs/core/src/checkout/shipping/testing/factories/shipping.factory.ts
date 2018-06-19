import { Injectable } from '@angular/core';
import { Address } from '../../../../interfaces/models/address';

@Injectable()
export class ShippingFactory {
  
  create() : MockShipping {
    return {...new MockShipping()};
  }
}

export class MockShipping implements Address {
  firstname: string = 'first';
  lastname: string = 'last';
  street: string = 'street';
  city: string = 'city';
  state: string = 'state';
  email: string = '';
  postcode: string = 'postcode';
  telephone: string = 'telephone';
}
