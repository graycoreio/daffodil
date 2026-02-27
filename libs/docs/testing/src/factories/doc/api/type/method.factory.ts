import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { sample } from '@daffodil/core';
import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  DaffDocsApiDecorator,
  DaffDocsApiFunctionParam,
  DaffDocsApiTypeMethod,
} from '@daffodil/docs-utils';

import { DaffDocsApiDecoratorFactory } from '../decorator.factory';
import { DaffDocsApiFunctionParamFactory } from '../function-param.factory';

/**
 * Mock {@link DaffDocsApiTypeMethod} object.
 */
export class MockDaffDocsApiTypeMethod implements DaffDocsApiTypeMethod {
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
  typeParameters = faker.lorem.words(3);
  type = faker.lorem.word();
  decorators = this.decoratorFactory.createMany(faker.number.int(3));
  parameterDocs = this.paramFactory.createMany(faker.number.int(3));

  constructor(
    protected decoratorFactory: IDaffModelFactory<DaffDocsApiDecorator>,
    protected paramFactory: IDaffModelFactory<DaffDocsApiFunctionParam>,
  ) {}
}

/**
 * Factory for creating {@link DaffDocsApiTypeMethod} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiTypeMethodFactory extends DaffModelFactory<DaffDocsApiTypeMethod, typeof MockDaffDocsApiTypeMethod> {
  constructor(
    decoratorFactory: DaffDocsApiDecoratorFactory,
    paramFactory: DaffDocsApiFunctionParamFactory,
  ) {
    super(MockDaffDocsApiTypeMethod, decoratorFactory, paramFactory);
  }
}
