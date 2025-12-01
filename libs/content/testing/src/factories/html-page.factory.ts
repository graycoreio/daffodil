import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffContentHtmlPage } from '@daffodil/content';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockContentHtmlPage implements DaffContentHtmlPage {
  id = faker.string.uuid();
  title = faker.lorem.word();
  htmlContent = faker.lorem.words(5);
  metaTitle = faker.lorem.word();
  metaDescription = faker.lorem.words(5);
};

@Injectable({
  providedIn: 'root',
})
export class DaffContentHtmlPageFactory extends DaffModelFactory<DaffContentHtmlPage>{
  constructor() {
    super(MockContentHtmlPage);
  }
}
