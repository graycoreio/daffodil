
import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import {
  DaffApiDocBase,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffioDocsApiDynamicContentFragments } from './fragment.type';

export interface DaffioDocsApiDynamicContentFragmentInjection<T extends DaffApiDocBase = DaffApiDocBase> extends DaffioDocsApiDynamicContentFragments<T> {
  role: DaffDocsApiRole;
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
