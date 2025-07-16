import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffContentPage } from '@daffodil/content';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockContentPage implements DaffContentPage {
  id = faker.string.uuid();
  title = faker.lorem.word();
  htmlContent = faker.lorem.words(5);
  metaTitle = faker.lorem.word();
  metaDescription = faker.lorem.words(5);
};

@Injectable({
  providedIn: 'root',
})
export class DaffContentPageFactory extends DaffModelFactory<DaffContentPage>{
  constructor() {
    super(MockContentPage);
  }
}
