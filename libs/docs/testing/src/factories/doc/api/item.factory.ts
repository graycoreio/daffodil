import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  DaffApiActionDoc,
  DaffApiComponentDoc,
  DaffApiConstantDoc,
  DaffApiDirectiveDoc,
  DaffApiDoc,
  DaffApiErrorDoc,
  DaffApiFacadeDoc,
  DaffApiGuardDoc,
  DaffApiHelperDoc,
  DaffApiMockDoc,
  DaffApiModelFactoryDoc,
  DaffApiModuleDoc,
  DaffApiOperatorDoc,
  DaffApiPipeDoc,
  DaffApiProviderDoc,
  DaffApiReducerDoc,
  DaffApiResolverDoc,
  DaffApiSelectorDoc,
  DaffApiServiceDoc,
  DaffApiTokenDoc,
  DaffApiTypeDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
} from '@daffodil/docs-utils';

/**
 * Factory for creating various documentation objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiDocFactory extends DaffModelFactory<DaffApiDoc> {
  constructor(
    protected apiActionDocFactory: IDaffModelFactory<DaffApiActionDoc>,
    protected apiComponentDocFactory: IDaffModelFactory<DaffApiComponentDoc>,
    protected apiConstantDocFactory: IDaffModelFactory<DaffApiConstantDoc>,
    protected apiDirectiveDocFactory: IDaffModelFactory<DaffApiDirectiveDoc>,
    protected apiErrorDocFactory: IDaffModelFactory<DaffApiErrorDoc>,
    protected apiFacadeDocFactory: IDaffModelFactory<DaffApiFacadeDoc>,
    protected apiGuardDocFactory: IDaffModelFactory<DaffApiGuardDoc>,
    protected apiHelperDocFactory: IDaffModelFactory<DaffApiHelperDoc>,
    protected apiMockDocFactory: IDaffModelFactory<DaffApiMockDoc>,
    protected apiModelFactoryDocFactory: IDaffModelFactory<DaffApiModelFactoryDoc>,
    protected apiModuleDocFactory: IDaffModelFactory<DaffApiModuleDoc>,
    protected apiOperatorDocFactory: IDaffModelFactory<DaffApiOperatorDoc>,
    protected apiPipeDocFactory: IDaffModelFactory<DaffApiPipeDoc>,
    protected apiProviderDocFactory: IDaffModelFactory<DaffApiProviderDoc>,
    protected apiReducerDocFactory: IDaffModelFactory<DaffApiReducerDoc>,
    protected apiResolverDocFactory: IDaffModelFactory<DaffApiResolverDoc>,
    protected apiSelectorDocFactory: IDaffModelFactory<DaffApiSelectorDoc>,
    protected apiServiceDocFactory: IDaffModelFactory<DaffApiServiceDoc>,
    protected apiTokenDocFactory: IDaffModelFactory<DaffApiTokenDoc>,
    protected apiTypeDocFactory: IDaffModelFactory<DaffApiTypeDoc>,
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
