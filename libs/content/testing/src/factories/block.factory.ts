import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffContentBlock } from '@daffodil/content';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockContentBlock implements DaffContentBlock {
  id = faker.string.uuid();
  title = faker.lorem.word();
  content = faker.lorem.words(5);
};


@Injectable({
  providedIn: 'root',
})
export class DaffContentBlockFactory extends DaffModelFactory<DaffContentBlock>{
  constructor() {
    super(MockContentBlock);
  }
}
