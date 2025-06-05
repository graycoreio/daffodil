
import { DaffApiDirective } from '@daffodil/docs-utils';

import { DaffioDocsApiBaseFragmentComponent } from '../../components/fragments/base/base.component';
import { DaffioDocsApiExamplesFragmentComponent } from '../../components/fragments/examples/examples.component';
import { DaffioDocsApiInputsFragmentComponent } from '../../components/fragments/inputs/inputs.component';
import { DaffioDocsApiMethodsFragmentComponent } from '../../components/fragments/methods/methods.component';
import { DaffioDocsApiOutputsFragmentComponent } from '../../components/fragments/outputs/outputs.component';
import { DaffioDocsApiPropsFragmentComponent } from '../../components/fragments/props/props.component';
import { DaffioDocsApiDynamicContentFragments } from '../../dynamic-content/fragment.type';

export const DAFFIO_DOCS_API_DIRECTIVE_FRAGMENTS: DaffioDocsApiDynamicContentFragments<DaffApiDirective> = {
  components: [
    DaffioDocsApiBaseFragmentComponent,
    DaffioDocsApiInputsFragmentComponent,
    DaffioDocsApiOutputsFragmentComponent,
    DaffioDocsApiPropsFragmentComponent,
    DaffioDocsApiMethodsFragmentComponent,
    DaffioDocsApiExamplesFragmentComponent,
  ],
};
