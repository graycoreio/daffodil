import { DaffDocsApiRole } from '@daffodil/docs-utils';

import { DaffioDocsApiBaseContentComponent } from './api-base-content.component';
import { provideDaffioDocsApiDynamicContentMultiComponent } from '../../../dynamic-content/dynamic-content-components.token';

export const provideDaffioDocsApiBaseContentComponent = () => provideDaffioDocsApiDynamicContentMultiComponent(
  DaffioDocsApiBaseContentComponent,
  DaffDocsApiRole.CONSTANT,
);
