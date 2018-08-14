import { Injectable } from '@angular/core';
import { DaffodilAddress } from '../models/daffodil-address';

@Injectable()
export class DaffodilAddressFactory {
  
  create() : MockDaffodilAddress {
    return {...new MockDaffodilAddress()};
  }
}

export class MockDaffodilAddress implements DaffodilAddress {
  firstname: string = 'first';
  lastname: string = 'last';
  street: string = 'street';
  city: string = 'city';
  state: string = 'state';
  email: string = '';
  postcode: string = 'postcode';
  telephone: string = 'telephone';
}
