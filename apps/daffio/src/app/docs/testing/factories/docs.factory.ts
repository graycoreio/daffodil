import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffDocKind,
  DaffGuideDoc,
} from '@daffodil/docs-utils';

export class MockDoc implements DaffGuideDoc {
  id = String(faker.datatype.number(1000));
  kind = sample(Object.values(DaffDocKind));
  title = faker.lorem.words();
  contents = faker.lorem.paragraph();
  // TODO: implement child models
  breadcrumbs = [];
  tableOfContents = {
    json: [
      {
        content: faker.lorem.paragraph(),
        lvl: faker.datatype.number(),
        slug: faker.random.alphaNumeric(),
      },
    ],
  };
};

@Injectable({
  providedIn: 'root',
})
export class DaffioDocsFactory extends DaffModelFactory<DaffGuideDoc>{
  constructor() {
    super(MockDoc);
  }
}
