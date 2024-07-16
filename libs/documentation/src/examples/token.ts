import { createMultiInjectionToken } from '@daffodil/core';

import { DaffDocsComponentExample } from './type';

export const {
  token: DAFF_DOCS_EXAMPLE_COMPONENTS,
  provider: provideDaffDocsExampleComponents,
} = createMultiInjectionToken<DaffDocsComponentExample>('DAFF_DOCS_EXAMPLE_COMPONENTS');
