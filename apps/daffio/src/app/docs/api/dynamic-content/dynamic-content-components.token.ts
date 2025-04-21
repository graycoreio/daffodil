import { Type } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import {
  DaffApiDocBase,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffioDocsApiDynamicContent } from './dynamic-content.type';

export interface DaffioDocsApiDynamicContentComponentInjection<T extends DaffApiDocBase = DaffApiDocBase> {
  readonly role: DaffDocsApiRole;
  type: Type<DaffioDocsApiDynamicContent<T>>;
}
type DaffioDocsApiDynamicContentComponent<T extends DaffApiDocBase = DaffApiDocBase> = {readonly role: DaffDocsApiRole} & Type<DaffioDocsApiDynamicContent<T>>;

export const {
  token: DAFFIO_DOCS_API_DYNAMIC_CONTENT_COMPONENTS,
  provider: provideDaffioDocsApiDynamicContentComponentsInjections,
} = createMultiInjectionToken<DaffioDocsApiDynamicContentComponentInjection>('DAFFIO_DOCS_API_DYNAMIC_CONTENT_COMPONENTS');

export const provideDaffioDocsApiDynamicContentComponents = <T extends DaffApiDocBase = DaffApiDocBase>(component: DaffioDocsApiDynamicContentComponent<T>) =>
  provideDaffioDocsApiDynamicContentComponentsInjections({
    role: component.role,
    type: component,
  });

export const provideDaffioDocsApiDynamicContentMultiComponent = <T extends DaffApiDocBase = DaffApiDocBase>(component: Type<DaffioDocsApiDynamicContent<T>>, ...roles: Array<DaffDocsApiRole>) =>
  provideDaffioDocsApiDynamicContentComponentsInjections(...roles.map((role) => ({
    role,
    type: component,
  })));
