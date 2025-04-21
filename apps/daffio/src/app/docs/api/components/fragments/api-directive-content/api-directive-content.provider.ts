import { DaffDocsApiRole } from '@daffodil/docs-utils';

import { DaffioDocsApiDirectiveContentComponent } from './api-directive-content.component';
import { provideDaffioDocsApiDynamicContentMultiComponent } from '../../../dynamic-content/dynamic-content-components.token';

export const provideDaffioDocsApiDirectiveContentComponent = () => provideDaffioDocsApiDynamicContentMultiComponent(
  DaffioDocsApiDirectiveContentComponent,
  DaffDocsApiRole.DIRECTIVE,
  DaffDocsApiRole.COMPONENT,
);
