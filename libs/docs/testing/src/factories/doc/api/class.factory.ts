import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  DaffBreadcrumb,
  DaffDocsApiClass,
  DaffDocsApiClassProperty,
  DaffDocsApiDecorator,
  DaffDocsApiType,
  DaffDocsApiTypeMethod,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassPropertyFactory } from './class-prop.factory';
import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { MockDaffApiType } from './type/doc.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock {@link DaffDocsApiClass} object.
 */
export class MockDaffDocsApiClass extends MockDaffApiType<DaffDocsApiClassProperty> implements DaffDocsApiClass {
  constructorDoc = this.methodFactory.create();
  isAbstract = faker.datatype.boolean();
  override docType: DaffDocsApiType.CLASS = DaffDocsApiType.CLASS;

  constructor(
    breadcrumbFactory: IDaffModelFactory<DaffBreadcrumb>,
    decoratorFactory: IDaffModelFactory<DaffDocsApiDecorator>,
    propFactory: IDaffModelFactory<DaffDocsApiClassProperty>,
    methodFactory: IDaffModelFactory<DaffDocsApiTypeMethod>,
  ) {
    super(
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}

/**
 * Factory for creating {@link DaffDocsApiClass} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiClassFactory extends DaffModelFactory<DaffDocsApiClass, typeof MockDaffDocsApiClass> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffDocsApiClass,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
