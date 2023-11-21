import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCountry } from '@daffodil/geography';

import { DaffSubdivisionFactory } from './subdivision.factory';

export class MockCountry implements DaffCountry {
  id = faker.datatype.uuid();
  name = faker.random.word();
  name_en = faker.random.word();
  alpha2 = faker.random.alphaNumeric(2);
  alpha3 = faker.random.alphaNumeric(3);
  subdivisions = this.subdivisionFactory.createMany(faker.datatype.number({ min: 0, max: 10 }));

  constructor(
    protected subdivisionFactory: DaffSubdivisionFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class DaffCountryFactory extends DaffModelFactory<DaffCountry> {
  constructor(
    subdivisionFactory: DaffSubdivisionFactory,
  ) {
    super(MockCountry, subdivisionFactory);
  }
}
