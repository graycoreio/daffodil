import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  DaffDocsApiFunction,
  DaffDocsApiType,
  DaffDocsApiFunctionParam,
  DaffBreadcrumb,
} from '@daffodil/docs-utils';

import { MockDaffApiDocBase } from './base.factory';
import { DaffDocsApiFunctionParamFactory } from './function-param.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock {@link DaffDocsApiFunction} object.
 */
export class MockDaffDocsApiFunction extends MockDaffApiDocBase implements DaffDocsApiFunction {
  override docType: DaffDocsApiType.FUNCTION = DaffDocsApiType.FUNCTION;
  parameterDocs = this.paramFactory.createMany(faker.number.int(3));
  typeParameters = faker.lorem.words(3);
  type = faker.lorem.word();

  constructor(
    breadcrumbFactory: IDaffModelFactory<DaffBreadcrumb>,
    protected paramFactory: IDaffModelFactory<DaffDocsApiFunctionParam>,
  ) {
    super(breadcrumbFactory);
  }
}

/**
 * Factory for creating {@link DaffDocsApiFunction} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiFunctionFactory extends DaffModelFactory<DaffDocsApiFunction, typeof MockDaffDocsApiFunction> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    paramFactory: DaffDocsApiFunctionParamFactory,
  ) {
    super(
      MockDaffDocsApiFunction,
      breadcrumbFactory,
      paramFactory,
    );
  }
}
