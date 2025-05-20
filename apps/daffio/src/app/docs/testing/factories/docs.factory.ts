import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffDocKind,
  DaffDoc,
} from '@daffodil/docs-utils';

export class MockDoc implements DaffDoc {
  id = String(faker.number.int(1000));
  kind = sample(Object.values(DaffDocKind));
  title = faker.lorem.words();
  contents = faker.lorem.paragraph();
  // TODO: implement child models
  breadcrumbs = [];
  tableOfContents = [
    {
      content: faker.lorem.paragraph(),
      lvl: faker.number.int(),
      slug: faker.string.alphanumeric(),
    },
  ];
};

@Injectable({
  providedIn: 'root',
})
export class DaffioDocsFactory extends DaffModelFactory<DaffDoc>{
  constructor() {
    super(MockDoc);
  }
}
