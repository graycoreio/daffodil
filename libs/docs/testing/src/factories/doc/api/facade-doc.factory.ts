import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiFacadeDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassPropertyFactory } from './class-prop.factory';
import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { MockDaffApiService } from './service-doc.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiFacadeDoc object.
 */
export class MockDaffApiFacadeDoc extends MockDaffApiService implements DaffApiFacadeDoc {
  override role: DaffDocsApiRole.FACADE = DaffDocsApiRole.FACADE;
}

/**
 * Factory for creating DaffApiFacadeDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiFacadeDocFactory extends DaffModelFactory<DaffApiFacadeDoc, typeof MockDaffApiFacadeDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffApiFacadeDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
