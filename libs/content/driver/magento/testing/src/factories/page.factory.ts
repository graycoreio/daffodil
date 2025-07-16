import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MagentoCmsPage } from '@daffodil/content/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoCmsPage implements MagentoCmsPage {
  __typename = <const>'CmsPage';
  type = <const>'CMS_PAGE';
  identifier = faker.string.uuid();
  title = faker.lorem.word();
  content = faker.lorem.words(5);
  meta_title = faker.lorem.word();
  meta_description = faker.lorem.words(5);
};

@Injectable({
  providedIn: 'root',
})
export class MagentoCmsPageFactory extends DaffModelFactory<MagentoCmsPage> {
  constructor() {
    super(MockMagentoCmsPage);
  }
}
