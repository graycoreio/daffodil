import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffioDoc } from '../../shared/models/doc';

export class MockDoc implements DaffioDoc {
  id = String(faker.random.number(1000));
  title = faker.lorem.words();
  contents = faker.lorem.paragraph();
};

@Injectable({
  providedIn: 'root',
})
export class DaffioDocFactory extends DaffModelFactory<DaffioDoc>{
  constructor() {
    super(MockDoc);
  }
}
