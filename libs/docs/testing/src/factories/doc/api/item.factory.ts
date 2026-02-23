import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffApiDoc } from '@daffodil/docs-utils';

import { DaffApiActionDocFactory } from './action-doc.factory';
import { DaffApiComponentDocFactory } from './component-doc.factory';
import { DaffApiConstantDocFactory } from './constant-doc.factory';
import { DaffApiDirectiveDocFactory } from './directive-doc.factory';
import { DaffApiErrorDocFactory } from './error-doc.factory';
import { DaffApiFacadeDocFactory } from './facade-doc.factory';
import { DaffDocsApiFunctionParamFactory } from './function-param.factory';
import { DaffApiGuardDocFactory } from './guard-doc.factory';
import { DaffApiHelperDocFactory } from './helper-doc.factory';
import { DaffApiMockDocFactory } from './mock-doc.factory';
import { DaffApiModelFactoryDocFactory } from './model-factory-doc.factory';
import { DaffApiModuleDocFactory } from './module-doc.factory';
import { DaffApiOperatorDocFactory } from './operator-doc.factory';
import { DaffApiPipeDocFactory } from './pipe-doc.factory';
import { DaffApiProviderDocFactory } from './provider-doc.factory';
import { DaffApiReducerDocFactory } from './reducer-doc.factory';
import { DaffApiResolverDocFactory } from './resolver-doc.factory';
import { DaffApiSelectorDocFactory } from './selector-doc.factory';
import { DaffApiServiceDocFactory } from './service-doc.factory';
import { DaffApiTokenDocFactory } from './token-doc.factory';
import { DaffApiTypeDocFactory } from './type-doc.factory';

/**
 * Factory for creating various documentation objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiDocFactory extends DaffModelFactory<DaffApiDoc> {
  constructor(
    private docsApiFunctionParamFactory: DaffDocsApiFunctionParamFactory,
    private apiActionDocFactory: DaffApiActionDocFactory,
    private apiServiceDocFactory: DaffApiServiceDocFactory,
    private apiComponentDocFactory: DaffApiComponentDocFactory,
    private apiDirectiveDocFactory: DaffApiDirectiveDocFactory,
    private apiPipeDocFactory: DaffApiPipeDocFactory,
    private apiModuleDocFactory: DaffApiModuleDocFactory,
    private apiGuardDocFactory: DaffApiGuardDocFactory,
    private apiResolverDocFactory: DaffApiResolverDocFactory,
    private apiReducerDocFactory: DaffApiReducerDocFactory,
    private apiProviderDocFactory: DaffApiProviderDocFactory,
    private apiHelperDocFactory: DaffApiHelperDocFactory,
    private apiFacadeDocFactory: DaffApiFacadeDocFactory,
    private apiErrorDocFactory: DaffApiErrorDocFactory,
    private apiTokenDocFactory: DaffApiTokenDocFactory,
    private apiTypeDocFactory: DaffApiTypeDocFactory,
    private apiConstantDocFactory: DaffApiConstantDocFactory,
    private apiSelectorDocFactory: DaffApiSelectorDocFactory,
    private apiOperatorDocFactory: DaffApiOperatorDocFactory,
    private apiMockDocFactory: DaffApiMockDocFactory,
    private apiModelFactoryDocFactory: DaffApiModelFactoryDocFactory,
  ) {
    super();
  }

  /**
   * Creates a random doc object.
   */
  override create(partial?: Partial<DaffApiDoc>): DaffApiDoc {
    return {
      ...faker.helpers.arrayElement([
        this.docsApiFunctionParamFactory.create(),
        this.apiActionDocFactory.create(),
        this.apiServiceDocFactory.create(),
        this.apiComponentDocFactory.create(),
        this.apiDirectiveDocFactory.create(),
        this.apiPipeDocFactory.create(),
        this.apiModuleDocFactory.create(),
        this.apiGuardDocFactory.create(),
        this.apiResolverDocFactory.create(),
        this.apiReducerDocFactory.create(),
        this.apiProviderDocFactory.create(),
        this.apiHelperDocFactory.create(),
        this.apiFacadeDocFactory.create(),
        this.apiErrorDocFactory.create(),
        this.apiTokenDocFactory.create(),
        this.apiTypeDocFactory.create(),
        this.apiConstantDocFactory.create(),
        this.apiSelectorDocFactory.create(),
        this.apiOperatorDocFactory.create(),
        this.apiMockDocFactory.create(),
        this.apiModelFactoryDocFactory.create(),
      ]),
      ...partial,
    };
  }
}
