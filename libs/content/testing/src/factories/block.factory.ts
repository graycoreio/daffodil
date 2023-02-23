import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffContentBlock } from '@daffodil/content';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockContentBlock implements DaffContentBlock {
  id = faker.datatype.uuid();
  title = faker.random.word();
  content = faker.random.words(5);
};


@Injectable({
  providedIn: 'root',
})
export class DaffContentBlockFactory extends DaffModelFactory<DaffContentBlock>{
  constructor() {
    super(MockContentBlock);
  }
}
