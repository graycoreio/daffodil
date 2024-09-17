import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffioDoc } from '../../models/doc';

export class MockDoc implements DaffioDoc {
  id = String(faker.datatype.number(1000));
  title = faker.lorem.words();
  contents = faker.lorem.paragraph();
  tableOfContents = {
    json: [
      {
        content: faker.lorem.words(),
        lvl: 1,
        slug: faker.random.word(),
      },
      {
        content: faker.lorem.words(),
        lvl: 2,
        slug: faker.random.word(),
      },
      {
        content: faker.lorem.words(),
        lvl: 3,
        slug: faker.random.word(),
      },
      {
        content: faker.lorem.words(),
        lvl: 3,
        slug: faker.random.word(),
      },
      {
        content: faker.lorem.words(),
        lvl: 2,
        slug: faker.random.word(),
      },
    ],
  };
};

@Injectable({
  providedIn: 'root',
})
export class DaffioDocsFactory extends DaffModelFactory<DaffioDoc>{
  constructor() {
    super(MockDoc);
  }
}
