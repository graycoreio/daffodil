import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { sample } from '@daffodil/core';
import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  DaffDocsApiDecorator,
  DaffDocsApiTypeProperty,
} from '@daffodil/docs-utils';

import { DaffDocsApiDecoratorFactory } from '../decorator.factory';

/**
 * Mock {@link DaffDocsApiTypeProperty} object.
 */
export class MockDaffDocsApiTypeProperty implements DaffDocsApiTypeProperty {
  name = faker.lorem.word();
  accessibility = faker.lorem.word();
  anchor = faker.lorem.word();
  aliases = [faker.lorem.word()];
  isAbstract = faker.datatype.boolean();
  isStatic = faker.datatype.boolean();
  isReadonly = faker.datatype.boolean();
  isOptional = faker.datatype.boolean();
  isGetAccessor = faker.datatype.boolean();
  isSetAccessor = faker.datatype.boolean();
  deprecated = sample(['', `Deprecated since version ${faker.system.semver()}`]);
  description = faker.lorem.words(3);
  type = faker.lorem.word();
  decorators = this.decoratorFactory.createMany(faker.number.int(3));

  constructor(
    protected decoratorFactory: IDaffModelFactory<DaffDocsApiDecorator>,
  ) {}
}

/**
 * Factory for creating {@link DaffDocsApiTypeProperty} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiTypePropertyFactory extends DaffModelFactory<DaffDocsApiTypeProperty, typeof MockDaffDocsApiTypeProperty> {
  constructor(
    decoratorFactory: DaffDocsApiDecoratorFactory,
  ) {
    super(MockDaffDocsApiTypeProperty, decoratorFactory);
  }
}
