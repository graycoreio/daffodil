import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  DaffApiTypeDoc,
  DaffApiType,
  DaffDocsApiRole,
  DaffDocsApiDecorator,
  DaffDocsApiTypeMethod,
  DaffDocsApiTypeProperty,
  DaffBreadcrumb,
} from '@daffodil/docs-utils';

import { DaffBreadcrumbFactory } from '../../../nav/public_api';
import { MockDaffApiDocBase } from '../base.factory';
import { DaffDocsApiDecoratorFactory } from '../decorator.factory';
import { DaffDocsApiTypeMethodFactory } from './method.factory';
import { DaffDocsApiTypePropertyFactory } from './prop.factory';

/**
 * Mock {@link DaffApiType} object.
 */
export class MockDaffApiType<T extends DaffDocsApiTypeProperty = DaffDocsApiTypeProperty> extends MockDaffApiDocBase implements DaffApiType<T> {
  typeParams = '';
  props = this.propFactory.createMany(faker.number.int(3));
  methods = this.methodFactory.createMany(faker.number.int(3));
  decorators = this.decoratorFactory.createMany(faker.number.int(3));
  extendsClauses = [];
  implementsClauses = [];

  constructor(
    breadcrumbFactory: IDaffModelFactory<DaffBreadcrumb>,
    protected decoratorFactory: IDaffModelFactory<DaffDocsApiDecorator>,
    protected propFactory: IDaffModelFactory<T>,
    protected methodFactory: IDaffModelFactory<DaffDocsApiTypeMethod>,
  ) {
    super(breadcrumbFactory);
  }
}

/**
 * Mock {@link DaffApiTypeDoc} object.
 */
export class MockDaffApiTypeDoc extends MockDaffApiType implements DaffApiTypeDoc {
  override role: DaffDocsApiRole.TYPE = DaffDocsApiRole.TYPE;
}

/**
 * Factory for creating {@link DaffApiTypeDoc} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiTypeDocFactory extends DaffModelFactory<DaffApiTypeDoc, typeof MockDaffApiTypeDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiTypePropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffApiTypeDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
