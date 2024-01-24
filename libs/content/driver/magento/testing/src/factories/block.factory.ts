import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MagentoContentBlock } from '@daffodil/content/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoContentBlock implements MagentoContentBlock {
  __typename = <const>'CmsBlock';
  identifier = faker.datatype.uuid();
  title = faker.random.word();
  content = faker.random.words(5);
};


@Injectable({
  providedIn: 'root',
})
export class MagentoContentBlockFactory extends DaffModelFactory<MagentoContentBlock> {
  constructor() {
    super(MockMagentoContentBlock);
  }
}
