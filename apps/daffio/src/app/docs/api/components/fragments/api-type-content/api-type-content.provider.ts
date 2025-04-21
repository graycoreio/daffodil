import { DaffDocsApiRole } from '@daffodil/docs-utils';

import { DaffioDocsApiTypeContentComponent } from './api-type-content.component';
import { provideDaffioDocsApiDynamicContentMultiComponent } from '../../../dynamic-content/dynamic-content-components.token';

export const provideDaffioDocsApiTypeContentComponent = () => provideDaffioDocsApiDynamicContentMultiComponent(
  DaffioDocsApiTypeContentComponent,
  DaffDocsApiRole.TYPE,
  DaffDocsApiRole.MODULE,
  DaffDocsApiRole.SERVICE,
  DaffDocsApiRole.PIPE,
  DaffDocsApiRole.ACTION,
  DaffDocsApiRole.ERROR,
  DaffDocsApiRole.FACADE,
  DaffDocsApiRole.MODEL_FACTORY,
  DaffDocsApiRole.MOCK,
);
