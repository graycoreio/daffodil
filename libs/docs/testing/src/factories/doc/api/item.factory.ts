import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
} from '@daffodil/docs-utils';

import { DaffApiActionDocFactory } from './action-doc.factory';
import { DaffApiComponentDocFactory } from './component-doc.factory';
import { DaffApiConstantDocFactory } from './constant-doc.factory';
import { DaffApiDirectiveDocFactory } from './directive/directive-doc.factory';
import { DaffApiErrorDocFactory } from './error-doc.factory';
import { DaffApiFacadeDocFactory } from './facade-doc.factory';
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
import { DaffApiTypeDocFactory } from './type/doc.factory';

/**
 * Factory for creating various documentation objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiDocFactory extends DaffModelFactory<DaffApiDoc> {
  constructor(
    protected apiActionDocFactory: DaffApiActionDocFactory,
    protected apiComponentDocFactory: DaffApiComponentDocFactory,
    protected apiConstantDocFactory: DaffApiConstantDocFactory,
    protected apiDirectiveDocFactory: DaffApiDirectiveDocFactory,
    protected apiErrorDocFactory: DaffApiErrorDocFactory,
    protected apiFacadeDocFactory: DaffApiFacadeDocFactory,
    protected apiGuardDocFactory: DaffApiGuardDocFactory,
    protected apiHelperDocFactory: DaffApiHelperDocFactory,
    protected apiMockDocFactory: DaffApiMockDocFactory,
    protected apiModelFactoryDocFactory: DaffApiModelFactoryDocFactory,
    protected apiModuleDocFactory: DaffApiModuleDocFactory,
    protected apiOperatorDocFactory: DaffApiOperatorDocFactory,
    protected apiPipeDocFactory: DaffApiPipeDocFactory,
    protected apiProviderDocFactory: DaffApiProviderDocFactory,
    protected apiReducerDocFactory: DaffApiReducerDocFactory,
    protected apiResolverDocFactory: DaffApiResolverDocFactory,
    protected apiSelectorDocFactory: DaffApiSelectorDocFactory,
    protected apiServiceDocFactory: DaffApiServiceDocFactory,
    protected apiTokenDocFactory: DaffApiTokenDocFactory,
    protected apiTypeDocFactory: DaffApiTypeDocFactory,
  ) {
    super();
  }

  /**
   * Creates a random doc object.
   */
  override create<R extends DaffApiDoc = DaffApiDoc>(partial: Partial<DaffApiDoc> & DaffApiDoc extends R ? Partial<DaffApiDoc> : R): DaffApiDoc & R;
  override create(partial?: Partial<DaffApiDoc>): DaffApiDoc;
  override create(partial?: Partial<DaffApiDoc>): DaffApiDoc {
    if (!partial) {
      return faker.helpers.arrayElement([
        this.apiActionDocFactory.create(),
        this.apiComponentDocFactory.create(),
        this.apiConstantDocFactory.create(),
        this.apiDirectiveDocFactory.create(),
        this.apiErrorDocFactory.create(),
        this.apiFacadeDocFactory.create(),
        this.apiGuardDocFactory.create(),
        this.apiHelperDocFactory.create(),
        this.apiMockDocFactory.create(),
        this.apiModelFactoryDocFactory.create(),
        this.apiModuleDocFactory.create(),
        this.apiOperatorDocFactory.create(),
        this.apiPipeDocFactory.create(),
        this.apiProviderDocFactory.create(),
        this.apiReducerDocFactory.create(),
        this.apiResolverDocFactory.create(),
        this.apiSelectorDocFactory.create(),
        this.apiServiceDocFactory.create(),
        this.apiTokenDocFactory.create(),
        this.apiTypeDocFactory.create(),
      ]);
    }

    switch (partial.role) {
      case DaffDocsApiRole.ACTION:
        return this.apiActionDocFactory.create(partial);

      case DaffDocsApiRole.COMPONENT:
        return this.apiComponentDocFactory.create(partial);

      case DaffDocsApiRole.CONSTANT:
        return this.apiConstantDocFactory.create(partial);

      case DaffDocsApiRole.DIRECTIVE:
        return this.apiDirectiveDocFactory.create(partial);

      case DaffDocsApiRole.ERROR:
        return this.apiErrorDocFactory.create(partial);

      case DaffDocsApiRole.FACADE:
        return this.apiFacadeDocFactory.create(partial);

      case DaffDocsApiRole.GUARD:
        return this.apiGuardDocFactory.create({
          docType: faker.helpers.arrayElement([
            DaffDocsApiType.CLASS,
            DaffDocsApiType.FUNCTION,
          ]),
          ...partial,
        });

      case DaffDocsApiRole.HELPER:
        return this.apiHelperDocFactory.create({
          docType: faker.helpers.arrayElement([
            DaffDocsApiType.CLASS,
            DaffDocsApiType.FUNCTION,
          ]),
          ...partial,
        });

      case DaffDocsApiRole.MOCK:
        return this.apiMockDocFactory.create(partial);

      case DaffDocsApiRole.MODEL_FACTORY:
        return this.apiModelFactoryDocFactory.create(partial);

      case DaffDocsApiRole.MODULE:
        return this.apiModuleDocFactory.create(partial);

      case DaffDocsApiRole.OPERATOR:
        return this.apiOperatorDocFactory.create(partial);

      case DaffDocsApiRole.PIPE:
        return this.apiPipeDocFactory.create(partial);

      case DaffDocsApiRole.PROVIDER:
        return this.apiProviderDocFactory.create(partial);

      case DaffDocsApiRole.REDUCER:
        return this.apiReducerDocFactory.create(partial);

      case DaffDocsApiRole.RESOLVER:
        return this.apiResolverDocFactory.create({
          docType: faker.helpers.arrayElement([
            DaffDocsApiType.CLASS,
            DaffDocsApiType.FUNCTION,
          ]),
          ...partial,
        });

      case DaffDocsApiRole.SELECTOR:
        return this.apiSelectorDocFactory.create(partial);

      case DaffDocsApiRole.SERVICE:
        return this.apiServiceDocFactory.create(partial);

      case DaffDocsApiRole.TOKEN:
        return this.apiTokenDocFactory.create(partial);

      case DaffDocsApiRole.TYPE:
        return this.apiTypeDocFactory.create(partial);

      default:
        throw new TypeError('DaffApiDocFactory requires that partials narrow the union type by specifying `role`.');
    }
  }
}
