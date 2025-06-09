import { DaffDocsApiRole } from '@daffodil/docs-utils';

import { DaffioDocsApiDynamicContentFragmentService } from '../dynamic-content/fragment.service';
import { provideDaffioDocsApiDynamicMultiRoleFragment } from '../dynamic-content/fragments.token';
import { DAFFIO_DOCS_API_DIRECTIVE_FRAGMENTS } from './fragments/directive';
import { DAFFIO_DOCS_API_FUNCTION_FRAGMENTS } from './fragments/function';
import { DAFFIO_DOCS_API_TYPE_FRAGMENTS } from './fragments/type';

export const daffioDocsApiRolesProvider = () => [
  ...provideDaffioDocsApiDynamicMultiRoleFragment(
    DAFFIO_DOCS_API_TYPE_FRAGMENTS,
    DaffDocsApiRole.TYPE,
    DaffDocsApiRole.MODULE,
    DaffDocsApiRole.SERVICE,
    DaffDocsApiRole.PIPE,
    DaffDocsApiRole.ACTION,
    DaffDocsApiRole.ERROR,
    DaffDocsApiRole.FACADE,
    DaffDocsApiRole.MODEL_FACTORY,
    DaffDocsApiRole.MOCK,
  ),
  ...provideDaffioDocsApiDynamicMultiRoleFragment(
    DAFFIO_DOCS_API_DIRECTIVE_FRAGMENTS,
    DaffDocsApiRole.DIRECTIVE,
    DaffDocsApiRole.COMPONENT,
  ),
  ...provideDaffioDocsApiDynamicMultiRoleFragment(
    DAFFIO_DOCS_API_FUNCTION_FRAGMENTS,
    DaffDocsApiRole.HELPER,
    DaffDocsApiRole.REDUCER,
    DaffDocsApiRole.PROVIDER,
  ),
  DaffioDocsApiDynamicContentFragmentService,
];
