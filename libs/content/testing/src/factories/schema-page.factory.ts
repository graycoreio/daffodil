import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffContentSchemaPage,
  DaffContentSchema,
} from '@daffodil/content';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockContentSchemaPage implements DaffContentSchemaPage {
  id = faker.string.uuid();
  title = faker.lorem.word();
  schema: DaffContentSchema = createMockSchema();
  metaTitle = faker.lorem.word();
  metaDescription = faker.lorem.words(5);
}

function createMockSchema(): DaffContentSchema {
  return {
    type: 'elementSchema',
    element: 'div',
    attributes: {
      class: 'mock-container',
    },
    children: [
      {
        type: 'elementSchema',
        element: 'h1',
        children: [
          {
            type: 'textSchema',
            text: faker.lorem.words(3),
          },
        ],
      },
      {
        type: 'elementSchema',
        element: 'p',
        children: [
          {
            type: 'textSchema',
            text: faker.lorem.sentence(),
          },
        ],
      },
    ],
  };
}

@Injectable({
  providedIn: 'root',
})
export class DaffContentSchemaPageFactory extends DaffModelFactory<DaffContentSchemaPage>{
  constructor() {
    super(MockContentSchemaPage);
  }
}
