import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsDesignExample } from '@daffodil/docs-utils';

import { DaffDocsDesignExampleFileFactory } from './design-example-file.factory';

/**
 * Mocked DaffDocsDesignExample object.
 */
export class MockDocsDesignExample implements DaffDocsDesignExample {
  id = faker.string.uuid();
  docType = <const>'design-example';
  name = faker.helpers.arrayElement(['Basic', 'Advanced', 'Custom', 'Themed']) + ' ' +
         faker.helpers.arrayElement(['Button', 'Card', 'Form', 'Modal', 'List', 'Navigation']) +
         ' Example';
  element = `daff-${faker.lorem.slug()}`;
  files = this.fileFactory.createMany(faker.number.int({ min: 2, max: 4 }));

  constructor(
    protected fileFactory: DaffDocsDesignExampleFileFactory,
  ) {}
}

/**
 * Factory for creating DaffDocsDesignExample objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsDesignExampleFactory extends DaffModelFactory<DaffDocsDesignExample, typeof MockDocsDesignExample> {
  constructor(
    fileFactory: DaffDocsDesignExampleFileFactory,
  ) {
    super(MockDocsDesignExample, fileFactory);
  }
}
