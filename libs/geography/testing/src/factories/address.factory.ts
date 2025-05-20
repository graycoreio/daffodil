import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffAddress } from '@daffodil/geography';


export class MockDaffAddress implements DaffAddress {
  street = faker.location.street();
  street2 = faker.location.secondaryAddress();
  city = faker.location.city();
  region = faker.string.uuid();
  region_code = faker.location.state({ abbreviated: true });
  postcode = faker.location.zipCode();
  country = faker.location.countryCode();
}

@Injectable({
  providedIn: 'root',
})
export class DaffAddressFactory extends DaffModelFactory<DaffAddress>{
  constructor(){
    super(MockDaffAddress);
  }
}
