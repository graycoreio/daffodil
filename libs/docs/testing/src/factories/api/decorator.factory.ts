import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsApiDecorator } from '@daffodil/docs-utils';

/**
 * Mocked DaffDocsApiDecorator object.
 */
export class MockDocsApiDecorator implements DaffDocsApiDecorator {
  name = faker.helpers.arrayElement([
    'Component',
    'Injectable',
    'NgModule',
    'Directive',
    'Pipe',
    'Input',
    'Output',
    'HostBinding',
    'HostListener',
  ]);

  argumentInfo = faker.helpers.arrayElements([
    {
      name: 'selector',
      value: `'${faker.lorem.slug()}'`,
    },
    {
      name: 'templateUrl',
      value: `'./${faker.lorem.slug()}.component.html'`,
    },
    {
      name: 'styleUrls',
      value: `['./${faker.lorem.slug()}.component.scss']`,
    },
  ], { min: 0, max: 3 });

  arguments = this.argumentInfo.map(arg => `${arg.name}: ${arg.value}`);
  isCallExpression = faker.datatype.boolean();
}

/**
 * A factory for creating a {@link DaffDocsApiDecorator}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiDecoratorFactory extends DaffModelFactory<DaffDocsApiDecorator, typeof MockDocsApiDecorator> {
  constructor() {
    super(MockDocsApiDecorator);
  }
}
