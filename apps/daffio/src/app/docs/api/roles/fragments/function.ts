import { DaffDocsApiFunction } from '@daffodil/docs-utils';

import { DaffioDocsApiBaseFragmentComponent } from '../../components/fragments/base/base.component';
import { DaffioDocsApiExamplesFragmentComponent } from '../../components/fragments/examples/examples.component';
import { DaffioDocsApiParamsFragmentComponent } from '../../components/fragments/params/params.component';
import { DaffioDocsApiDynamicContentFragments } from '../../dynamic-content/fragment.type';

export const DAFFIO_DOCS_API_FUNCTION_FRAGMENTS: DaffioDocsApiDynamicContentFragments<DaffDocsApiFunction> = {
  components: [
    DaffioDocsApiBaseFragmentComponent,
    DaffioDocsApiParamsFragmentComponent,
    DaffioDocsApiExamplesFragmentComponent,
  ],
};
