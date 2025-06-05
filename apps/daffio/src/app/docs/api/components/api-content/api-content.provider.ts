import {
  DaffApiDoc,
  DaffApiPackageDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocsApiContentComponent } from './api-content.component';
import {
  DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENT_INJECTION_GETTER_KEY,
  DaffioDocsDynamicContentComponentInjection,
  provideDaffioDocsDynamicContentComponents,
} from '../../../dynamic-content/dynamic-content-components.token';
import { DaffioApiPackageComponent } from '../api-package/api-package.component';

export const provideDaffioDocsApiContentComponent = () => provideDaffioDocsDynamicContentComponents<DaffioDocsDynamicContentComponentInjection<DaffApiPackageDoc | DaffApiDoc>>({
  kind: DaffDocKind.API,
  [DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENT_INJECTION_GETTER_KEY]: (doc) => () =>
    doc.docType === 'package'
      ? DaffioApiPackageComponent
      : DaffioDocsApiContentComponent,
});
