import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  DaffApiDirective,
  DaffApiDirectiveDoc,
  DaffApiDirectiveInputDoc,
  DaffBreadcrumb,
  DaffDocsApiClassProperty,
  DaffDocsApiDecorator,
  DaffDocsApiHostDirective,
  DaffDocsApiRole,
  DaffDocsApiTypeMethod,
} from '@daffodil/docs-utils';

import { DaffBreadcrumbFactory } from '../../../nav/public_api';
import { DaffDocsApiClassPropertyFactory } from '../class-prop.factory';
import { MockDaffDocsApiClass } from '../class.factory';
import { DaffDocsApiDecoratorFactory } from '../decorator.factory';
import { DaffDocsApiHostDirectiveFactory } from './host.factory';
import { DaffApiDirectiveInputDocFactory } from './input.factory';
import { DaffDocsApiTypeMethodFactory } from '../type/method.factory';

/**
 * Mock DaffApiDirectiveDoc object.
 */
export class MockDaffApiDirective extends MockDaffDocsApiClass implements DaffApiDirective {
  selector = faker.helpers.arrayElement([
    '[daffButton]',
    '[daffFocus]',
    '[daffTooltip]',
    '[daffHighlight]',
    '.daff-directive',
  ]);
  inputs = this.inputFactory.createMany(faker.number.int(3));
  outputs = this.propFactory.createMany(faker.number.int(3));
  hostDirectives = this.hostFactory.createMany(faker.number.int(3));

  constructor(
    breadcrumbFactory: IDaffModelFactory<DaffBreadcrumb>,
    decoratorFactory: IDaffModelFactory<DaffDocsApiDecorator>,
    propFactory: IDaffModelFactory<DaffDocsApiClassProperty>,
    methodFactory: IDaffModelFactory<DaffDocsApiTypeMethod>,
    protected inputFactory: IDaffModelFactory<DaffApiDirectiveInputDoc>,
    protected hostFactory: IDaffModelFactory<DaffDocsApiHostDirective>,
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
 * Mock DaffApiDirectiveDoc object.
 */
export class MockDaffApiDirectiveDoc extends MockDaffApiDirective implements DaffApiDirectiveDoc {
  override role: DaffDocsApiRole.DIRECTIVE = DaffDocsApiRole.DIRECTIVE;
}

/**
 * Factory for creating DaffApiDirectiveDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiDirectiveDocFactory extends DaffModelFactory<DaffApiDirectiveDoc, typeof MockDaffApiDirectiveDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
    inputFactory: DaffApiDirectiveInputDocFactory,
    hostFactory: DaffDocsApiHostDirectiveFactory,
  ) {
    super(
      MockDaffApiDirectiveDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
      inputFactory,
      hostFactory,
    );
  }
}
