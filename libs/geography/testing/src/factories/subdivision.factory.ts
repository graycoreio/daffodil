import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffSubdivision } from '@daffodil/geography';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockSubdivision implements DaffSubdivision {
  id = String(faker.random.number({min: 1, max: 1000}));
  name = faker.random.word();
	iso_3166_2 = faker.random.alphaNumeric(2);
}

@Injectable({
  providedIn: 'root'
})
export class DaffSubdivisionFactory extends DaffModelFactory<DaffSubdivision> {
  constructor() {
    super(MockSubdivision);
  }
}
