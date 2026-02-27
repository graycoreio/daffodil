import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiComponentDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassPropertyFactory } from './class-prop.factory';
import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { MockDaffApiDirective } from './directive/directive-doc.factory';
import { DaffDocsApiHostDirectiveFactory } from './directive/host.factory';
import { DaffApiDirectiveInputDocFactory } from './directive/input.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiComponentDoc object.
 */
export class MockDaffApiComponentDoc extends MockDaffApiDirective implements DaffApiComponentDoc {
  override role: DaffDocsApiRole.COMPONENT = DaffDocsApiRole.COMPONENT;
}

/**
 * Factory for creating DaffApiComponentDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiComponentDocFactory extends DaffModelFactory<DaffApiComponentDoc, typeof MockDaffApiComponentDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
    inputFactory: DaffApiDirectiveInputDocFactory,
    hostFactory: DaffDocsApiHostDirectiveFactory,
  ) {
    super(
      MockDaffApiComponentDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
      inputFactory,
      hostFactory,
    );
  }
}
