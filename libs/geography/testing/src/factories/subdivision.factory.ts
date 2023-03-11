import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffSubdivision } from '@daffodil/geography';

export class MockSubdivision implements DaffSubdivision {
  id = faker.datatype.uuid();
  name = faker.random.word();
  iso_3166_2 = faker.random.alphaNumeric(2);
}

@Injectable({
  providedIn: 'root',
})
export class DaffSubdivisionFactory extends DaffModelFactory<DaffSubdivision> {
  constructor() {
    super(MockSubdivision);
  }
}
