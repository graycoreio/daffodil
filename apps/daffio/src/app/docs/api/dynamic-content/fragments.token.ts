
import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import {
  DaffApiDocBase,
  DaffDocsApiRole,
  DaffDocsApiType,
} from '@daffodil/docs-utils';

import { DaffioDocsApiDynamicContentFragments } from './fragment.type';

export interface DaffioDocsApiDynamicContentFragmentInjection<T extends DaffApiDocBase = DaffApiDocBase> extends DaffioDocsApiDynamicContentFragments<T> {
  role: DaffDocsApiRole;
  /**
   * Restricts the fragments to docs of this type.
   * Needed for roles that can be applied to more than one doc type, e.g. a helper can be a class or a function.
   * Fragments registered with a doc type take precedence over fragments registered for only the role.
   */
  docType?: DaffDocsApiType;
}

export const {
  token: DAFFIO_DOCS_API_DYNAMIC_FRAGMENTS,
  provider: provideDaffioDocsApiDynamicFragments,
} = createMultiInjectionToken<DaffioDocsApiDynamicContentFragmentInjection>('DAFFIO_DOCS_API_DYNAMIC_FRAGMENTS', { factory: () => []});

export const provideDaffioDocsApiDynamicMultiRoleFragment = <T extends DaffApiDocBase = DaffApiDocBase>(fragment: DaffioDocsApiDynamicContentFragments<T>, ...roles: Array<DaffDocsApiRole>): Array<Provider> =>
  roles.map((role) => ({
    provide: DAFFIO_DOCS_API_DYNAMIC_FRAGMENTS,
    useValue: Object.assign({ role }, fragment),
    multi: true,
  }));

/**
 * Provides fragments for docs of the given roles that are also of the given doc type.
 */
export const provideDaffioDocsApiDynamicMultiRoleDocTypeFragment = <T extends DaffApiDocBase = DaffApiDocBase>(fragment: DaffioDocsApiDynamicContentFragments<T>, docType: DaffDocsApiType, ...roles: Array<DaffDocsApiRole>): Array<Provider> =>
  roles.map((role) => ({
    provide: DAFFIO_DOCS_API_DYNAMIC_FRAGMENTS,
    useValue: Object.assign({ role, docType }, fragment),
    multi: true,
  }));
