import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocExample } from '@daffodil/docs-utils';

/**
 * Mocked DaffDocExample object.
 */
export class MockDocExample implements DaffDocExample {
  id = faker.string.uuid();
  caption = faker.lorem.words({ min: 2, max: 6 });
  body = `<h3>${faker.lorem.words({ min: 1, max: 3 })}</h3>\n<p>${faker.lorem.paragraph()}</p>\n<pre><code>${faker.helpers.arrayElement([
    'npm install @daffodil/product',
    'import { DaffProduct } from "@daffodil/product";',
    'const product = new DaffProduct();',
    '<daff-button>Click me</daff-button>',
    '.my-class { color: red; }',
  ])}</code></pre>`;
}

/**
 * Factory for creating DaffDocExample objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocExampleFactory extends DaffModelFactory<DaffDocExample, typeof MockDocExample> {
  constructor() {
    super(MockDocExample);
  }
}
