import { DaffApiType } from '@daffodil/docs-utils';

import { DaffioDocsApiBaseFragmentComponent } from '../../components/fragments/base/base.component';
import { DaffioDocsApiExamplesFragmentComponent } from '../../components/fragments/examples/examples.component';
import { DaffioDocsApiMethodsFragmentComponent } from '../../components/fragments/methods/methods.component';
import { DaffioDocsApiPropsFragmentComponent } from '../../components/fragments/props/props.component';
import { DaffioDocsApiDynamicContentFragments } from '../../dynamic-content/fragment.type';

export const DAFFIO_DOCS_API_TYPE_FRAGMENTS: DaffioDocsApiDynamicContentFragments<DaffApiType> = {
  components: [
    DaffioDocsApiBaseFragmentComponent,
    DaffioDocsApiPropsFragmentComponent,
    DaffioDocsApiMethodsFragmentComponent,
    DaffioDocsApiExamplesFragmentComponent,
  ],
};
