import { DaffApiDocBase } from '@daffodil/docs-utils';

import { DaffioDocsApiBaseFragmentComponent } from '../../components/fragments/base/base.component';
import { DaffioDocsApiExamplesFragmentComponent } from '../../components/fragments/examples/examples.component';
import { DaffioDocsApiDynamicContentFragments } from '../../dynamic-content/fragment.type';

export const DAFFIO_DOCS_API_BASE_FRAGMENTS: DaffioDocsApiDynamicContentFragments<DaffApiDocBase> = {
  components: [
    DaffioDocsApiBaseFragmentComponent,
    DaffioDocsApiExamplesFragmentComponent,
  ],
};
